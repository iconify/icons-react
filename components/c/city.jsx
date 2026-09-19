import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/ta5echf4d.css';
import '../../css/k/kqjwhobau.css';
import '../../css/m/mamoy9zvi.css';
import '../../css/e/e-gqa5b9d.css';
import '../../css/i/i0fxb213f.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGnMTBudLN"><g class="ft5dv1b6b"><path class="ta5echf4d"/><rect class="kqjwhobau"/><path class="mamoy9zvi"/><rect class="e-gqa5b9d"/><path class="i0fxb213f"/></g></mask></defs><path mask="url(#SVGnMTBudLN)" class="bl95smbeo"/>`,
		"fallback": "icon-park-twotone:city",
	});
}

export default Component;

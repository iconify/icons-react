import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t0jksjblz.css';
import '../../css/p/pb8gjlash.css';
import '../../css/s/sj47zv1me.css';
import '../../css/u/uz5bkzsts.css';
import '../../css/o/op5jgfhrd.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVGwsFPBdWn"><g class="ft5dv1b6b"><circle class="t0jksjblz"/><path class="pb8gjlash"/><path class="sj47zv1me"/><path class="uz5bkzsts"/><path class="op5jgfhrd"/></g></mask></defs><path mask="url(#SVGwsFPBdWn)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:bitcoin",
	});
}

export default Component;

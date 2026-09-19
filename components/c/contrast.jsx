import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/o/oo_vs07_g.css';
import '../../css/f/fh76d8bpj.css';
import '../../css/b/bl95smbeo.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><mask id="SVG9wYJge3c"><g class="ufeehvblu"><path class="oo_vs07_g"/><path class="fh76d8bpj"/></g></mask></defs><path mask="url(#SVG9wYJge3c)" class="bl95smbeo"/>`,
		"fallback": "icon-park-solid:contrast",
	});
}

export default Component;

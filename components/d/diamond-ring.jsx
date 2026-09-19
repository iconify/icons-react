import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/r/rbb69cszp.css';
import '../../css/u/uim016kcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><circle class="rbb69cszp"/><path class="uim016kcs"/></g>`,
		"fallback": "icon-park-solid:diamond-ring",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n-kgrhb0e.css';
import '../../css/c/clr-_gv_i.css';
import '../../css/p/ptl4ptbdc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n-kgrhb0e"/><path class="clr-_gv_i"/><path class="ptl4ptbdc"/>`,
		"fallback": "famicons:bug-outline",
	});
}

export default Component;

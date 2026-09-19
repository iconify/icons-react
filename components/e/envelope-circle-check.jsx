import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvrx_obxd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvrx_obxd"/>`,
		"fallback": "fa7-solid:envelope-circle-check",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cw6emmb0n.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cw6emmb0n"/>`,
		"fallback": "fa7-solid:exclamation-circle",
	});
}

export default Component;

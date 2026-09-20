import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/es5s-vbvy.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="es5s-vbvy"/>`,
		"fallback": "rivet-icons:bell",
	});
}

export default Component;

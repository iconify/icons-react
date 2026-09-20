import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bf6_ihbwv.css';

const viewBox = {"width":25,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bf6_ihbwv"/>`,
		"fallback": "lineicons:align-text-center",
	});
}

export default Component;

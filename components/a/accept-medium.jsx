import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/ji_sg-btu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ji_sg-btu"/>`,
		"fallback": "fluent-mdl2:accept-medium",
	});
}

export default Component;

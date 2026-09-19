import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjp4ez7iq.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjp4ez7iq"/>`,
		"fallback": "fluent-mdl2:error",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g1w1i6bda.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g1w1i6bda"/>`,
		"fallback": "fluent-mdl2:feedback",
	});
}

export default Component;

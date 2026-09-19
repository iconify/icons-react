import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ackp62swz.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ackp62swz"/>`,
		"fallback": "fluent-mdl2:home-verify",
	});
}

export default Component;

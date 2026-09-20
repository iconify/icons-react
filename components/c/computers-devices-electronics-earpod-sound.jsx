import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/khd9gq-js.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="khd9gq-js"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-earpod-sound",
	});
}

export default Component;

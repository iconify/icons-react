import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w0dp5vk3o.css';
import '../../css/z/z_z9eib_t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w0dp5vk3o"/><path class="z_z9eib_t"/>`,
		"fallback": "streamline-freehand:camera-stabilizer",
	});
}

export default Component;

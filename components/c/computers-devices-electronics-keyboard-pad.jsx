import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f5n06o36f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f5n06o36f"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-keyboard-pad",
	});
}

export default Component;

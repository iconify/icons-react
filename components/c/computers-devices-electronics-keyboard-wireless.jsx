import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vzn2_3byc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vzn2_3byc"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-keyboard-wireless",
	});
}

export default Component;

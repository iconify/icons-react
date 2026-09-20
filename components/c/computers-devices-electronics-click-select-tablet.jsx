import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrlbef4-h.css';
import '../../css/y/y17nwib9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrlbef4-h"/><path class="y17nwib9u"/>`,
		"fallback": "streamline-pixel:computers-devices-electronics-click-select-tablet",
	});
}

export default Component;

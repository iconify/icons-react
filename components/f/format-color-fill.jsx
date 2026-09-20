import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r84fri8yn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="r84fri8yn"/>`,
		"fallback": "mdi:format-color-fill",
	});
}

export default Component;

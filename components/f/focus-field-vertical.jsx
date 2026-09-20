import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shd6ibcoy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shd6ibcoy"/>`,
		"fallback": "mdi:focus-field-vertical",
	});
}

export default Component;

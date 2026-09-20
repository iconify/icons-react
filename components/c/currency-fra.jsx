import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr0advatx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jr0advatx"/>`,
		"fallback": "mdi:currency-fra",
	});
}

export default Component;

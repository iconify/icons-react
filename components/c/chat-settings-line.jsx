import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to9c7bclz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="to9c7bclz"/>`,
		"fallback": "ri:chat-settings-line",
	});
}

export default Component;

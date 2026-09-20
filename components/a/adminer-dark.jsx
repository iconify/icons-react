import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tevga6bot.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tevga6bot"/>`,
		"fallback": "selfhst:adminer-dark",
	});
}

export default Component;

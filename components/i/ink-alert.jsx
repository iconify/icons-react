import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uny7lqboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uny7lqboc"/>`,
		"fallback": "mdi:ink-alert",
	});
}

export default Component;

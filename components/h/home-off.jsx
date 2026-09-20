import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya7fk0fzc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya7fk0fzc"/>`,
		"fallback": "mdi:home-off",
	});
}

export default Component;

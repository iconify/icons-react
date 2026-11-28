import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rpg0fzbjt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="primary rpg0fzbjt"/>`,
		"fallback": "iconaut:ease-in-out-duotone",
	});
}

export default Component;

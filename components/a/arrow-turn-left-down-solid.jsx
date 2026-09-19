import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/egp6p36lg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="egp6p36lg"/>`,
		"fallback": "heroicons:arrow-turn-left-down-solid",
	});
}

export default Component;

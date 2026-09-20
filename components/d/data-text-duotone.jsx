import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u79u2pbxy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="u79u2pbxy"/>`,
		"fallback": "stash:data-text-duotone",
	});
}

export default Component;

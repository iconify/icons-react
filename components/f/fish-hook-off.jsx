import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tku4xni9l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tku4xni9l"/>`,
		"fallback": "tabler:fish-hook-off",
	});
}

export default Component;

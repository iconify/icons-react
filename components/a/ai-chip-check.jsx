import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4ic54bqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4ic54bqy"/>`,
		"fallback": "noviair-light:ai-chip-check",
	});
}

export default Component;

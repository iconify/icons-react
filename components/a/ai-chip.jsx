import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ijf0vaczb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ijf0vaczb"/>`,
		"fallback": "noviair:ai-chip",
	});
}

export default Component;

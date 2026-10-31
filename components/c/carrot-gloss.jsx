import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wedi3hbtg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wedi3hbtg"/>`,
		"fallback": "withicons:carrot-gloss",
	});
}

export default Component;

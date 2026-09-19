import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vfefqmbqg.css';
import '../../css/r/r0ke4kbpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vfefqmbqg"/><path class="r0ke4kbpu"/>`,
		"fallback": "bx:credit-card",
	});
}

export default Component;

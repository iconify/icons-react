import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pvs2kr1fr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pvs2kr1fr"/>`,
		"fallback": "coolicons:flip-vertical-round",
	});
}

export default Component;

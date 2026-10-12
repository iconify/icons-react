import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_oeqshiy.css';
import '../../css/v/v7-hzldcr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a_oeqshiy"/><path class="v7-hzldcr"/>`,
		"fallback": "energy-icons:heart-pulse-20-bold",
	});
}

export default Component;

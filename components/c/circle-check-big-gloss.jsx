import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t7fm4wb9k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t7fm4wb9k"/>`,
		"fallback": "withicons:circle-check-big-gloss",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ls0ixtykb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ls0ixtykb"/>`,
		"fallback": "mdi:chart-bar",
	});
}

export default Component;

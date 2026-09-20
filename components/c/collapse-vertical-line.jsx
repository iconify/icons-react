import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mg8x53b7f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mg8x53b7f"/>`,
		"fallback": "ri:collapse-vertical-line",
	});
}

export default Component;

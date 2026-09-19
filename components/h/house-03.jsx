import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q6kss8baq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q6kss8baq"/>`,
		"fallback": "ci:house-03",
	});
}

export default Component;

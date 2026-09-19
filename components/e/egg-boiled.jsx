import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7eegcc8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q7eegcc8q"/>`,
		"fallback": "griddy-icons:egg-boiled",
	});
}

export default Component;

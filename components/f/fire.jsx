import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a1fb8tbny.css';
import '../../css/o/oyc5ru9aq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a1fb8tbny duoicon-primary-layer"/><path class="duoicon-secondary-layer oyc5ru9aq"/>`,
		"fallback": "duo-icons:fire",
	});
}

export default Component;

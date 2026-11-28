import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svx0lxokl.css';
import '../../css/d/dgfy8elcu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary svx0lxokl"/><path class="dgfy8elcu primary"/>`,
		"fallback": "iconaut:arrow-big-right-duo",
	});
}

export default Component;

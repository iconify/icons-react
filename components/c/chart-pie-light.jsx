import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ctceaps1p.css';
import '../../css/y/yg4acmb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ctceaps1p"/><path class="yg4acmb0l"/>`,
		"fallback": "stash:chart-pie-light",
	});
}

export default Component;

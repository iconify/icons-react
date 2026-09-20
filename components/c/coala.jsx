import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rtp7e5q6g.css';
import '../../css/q/qi9k6pbvy.css';
import '../../css/i/id739e0ip.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path xmlns="http://www.w3.org/2000/svg" class="rtp7e5q6g"/><path xmlns="http://www.w3.org/2000/svg" class="qi9k6pbvy"/><path xmlns="http://www.w3.org/2000/svg" class="id739e0ip"/>`,
		"fallback": "material-icon-theme:coala",
	});
}

export default Component;

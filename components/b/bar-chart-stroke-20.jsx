import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/namhj9b3u.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="namhj9b3u"/>`,
		"fallback": "garden:bar-chart-stroke-20",
	});
}

export default Component;

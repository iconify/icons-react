import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mds8r6baq.css';
import '../../css/d/d18mv78yu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mds8r6baq"/><path class="d18mv78yu"/>`,
		"fallback": "lineicons:imdb",
	});
}

export default Component;

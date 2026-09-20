import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgvnwj71y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgvnwj71y"/>`,
		"fallback": "solar:arrow-to-down-left-bold",
	});
}

export default Component;

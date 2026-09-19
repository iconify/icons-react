import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3t9q1bdx.css';
import '../../css/t/t-4450b8z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3t9q1bdx"/><path class="t-4450b8z"/>`,
		"fallback": "boxicons:captions",
	});
}

export default Component;

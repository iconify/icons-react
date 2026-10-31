import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bc6opcb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bc6opcb5q"/>`,
		"fallback": "coolicons:first-aid-fill-round",
	});
}

export default Component;

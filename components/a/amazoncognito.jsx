import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z6aym8bcq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z6aym8bcq"/>`,
		"fallback": "simple-icons:amazoncognito",
	});
}

export default Component;

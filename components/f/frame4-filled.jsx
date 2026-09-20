import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/on0f48l7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="on0f48l7q"/>`,
		"fallback": "reicon:frame4-filled",
	});
}

export default Component;

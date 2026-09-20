import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmlbocb5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmlbocb5q"/>`,
		"fallback": "mdi:battery-high",
	});
}

export default Component;

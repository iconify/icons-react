import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmh1bfs7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qmh1bfs7y"/>`,
		"fallback": "ci:dot-01-xs",
	});
}

export default Component;

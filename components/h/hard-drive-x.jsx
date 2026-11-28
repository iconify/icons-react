import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyy11la5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyy11la5q"/>`,
		"fallback": "noviair-light:hard-drive-x",
	});
}

export default Component;

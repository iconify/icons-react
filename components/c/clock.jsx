import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/awv77bc5q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="awv77bc5q"/>`,
		"fallback": "pixelarticons:clock",
	});
}

export default Component;

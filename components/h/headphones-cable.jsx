import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d9af41bwu.css';
import '../../css/e/eo9c1jb5g.css';
import '../../css/n/n0qwfabul.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d9af41bwu"/><path class="eo9c1jb5g"/><path class="n0qwfabul"/>`,
		"fallback": "streamline-freehand:headphones-cable",
	});
}

export default Component;

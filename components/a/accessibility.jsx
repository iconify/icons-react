import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6dmbibyf.css';
import '../../css/r/r6hiy7bns.css';
import '../../css/y/yi94j5zbc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d6dmbibyf wm-k"/><path class="r6hiy7bns wm-k"/><path class="wm-a yi94j5zbc"/>`,
		"fallback": "withicons-bauhaus:accessibility",
	});
}

export default Component;

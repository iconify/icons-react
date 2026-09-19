import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zudc4ebwq.css';
import '../../css/y/y3t9q1bdx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zudc4ebwq"/><path class="y3t9q1bdx"/>`,
		"fallback": "boxicons:captions-cc",
	});
}

export default Component;

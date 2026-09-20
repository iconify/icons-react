import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbiybx0vg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbiybx0vg"/>`,
		"fallback": "weui:imac-filled",
	});
}

export default Component;

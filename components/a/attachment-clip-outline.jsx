import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wxbqhgb_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="attachment-clip-outline"><path class="Vector wxbqhgb_a" clip-rule="evenodd"/></g>`,
		"fallback": "cuida:attachment-clip-outline",
	});
}

export default Component;

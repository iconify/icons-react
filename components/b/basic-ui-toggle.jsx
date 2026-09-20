import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h-pocwb_q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h-pocwb_q"/>`,
		"fallback": "streamline-block:basic-ui-toggle",
	});
}

export default Component;

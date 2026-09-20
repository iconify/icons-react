import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-n8iwb_w.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y-n8iwb_w"/>`,
		"fallback": "streamline-flex:auto-correction-check-remix",
	});
}

export default Component;

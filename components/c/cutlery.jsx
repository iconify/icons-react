import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zndc0hg1w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zndc0hg1w"/>`,
		"fallback": "nrk:cutlery",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrj4jebuk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrj4jebuk"/>`,
		"fallback": "uil:comment-alt-shield",
	});
}

export default Component;

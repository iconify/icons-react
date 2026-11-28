import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v99-kxb3s.css';
import '../../css/j/j0jt8n8se.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary v99-kxb3s"/><path class="j0jt8n8se primary"/>`,
		"fallback": "iconaut:drumstick-duo",
	});
}

export default Component;

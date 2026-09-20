import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1p_6uu5p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h1p_6uu5p"/>`,
		"fallback": "weui:back2-filled",
	});
}

export default Component;

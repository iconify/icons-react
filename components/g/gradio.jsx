import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jw767cbll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jw767cbll"/>`,
		"fallback": "simple-icons:gradio",
	});
}

export default Component;

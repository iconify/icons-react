import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd8zf1-gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd8zf1-gr"/>`,
		"fallback": "simple-icons:envoyproxy",
	});
}

export default Component;

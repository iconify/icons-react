import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/ww1sdi6gr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ww1sdi6gr"/>`,
		"fallback": "noviair-light:car",
	});
}

export default Component;

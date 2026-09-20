import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wpsxk_bqh.css';

const viewBox = {"width":256,"height":167.509};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wpsxk_bqh"/>`,
		"fallback": "thesvg-color:fastify-light",
	});
}

export default Component;

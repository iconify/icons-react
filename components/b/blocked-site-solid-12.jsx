import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyjp6ob9g.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyjp6ob9g"/>`,
		"fallback": "fluent-mdl2:blocked-site-solid-12",
	});
}

export default Component;

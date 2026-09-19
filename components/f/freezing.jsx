import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn2gz5idw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xn2gz5idw"/>`,
		"fallback": "fluent-mdl2:freezing",
	});
}

export default Component;

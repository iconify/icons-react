import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w_0ygnbxk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w_0ygnbxk"/>`,
		"fallback": "fluent-mdl2:event-12",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n0ovs9bim.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n0ovs9bim"/>`,
		"fallback": "fluent-mdl2:hail-day",
	});
}

export default Component;

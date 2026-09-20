import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjdl7cbtb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjdl7cbtb"/>`,
		"fallback": "mdi:image-broken-variant",
	});
}

export default Component;

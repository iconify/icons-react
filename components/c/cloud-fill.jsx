import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/ztsfy6b2l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ztsfy6b2l"/>`,
		"fallback": "keyline-icons:cloud-fill",
	});
}

export default Component;

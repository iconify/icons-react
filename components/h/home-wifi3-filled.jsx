import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypalqe4ks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ypalqe4ks"/>`,
		"fallback": "reicon:home-wifi3-filled",
	});
}

export default Component;

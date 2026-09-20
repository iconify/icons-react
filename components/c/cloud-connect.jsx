import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3uwj83vl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y3uwj83vl"/>`,
		"fallback": "reicon:cloud-connect",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h_3jp4bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h_3jp4bvr"/>`,
		"fallback": "reicon:hanger",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myf3l1ujr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myf3l1ujr"/>`,
		"fallback": "solar:dislike-outline",
	});
}

export default Component;

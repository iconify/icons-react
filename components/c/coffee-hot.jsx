import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/t/t-0znnbxc.css';
import '../../css/b/be0htwbow.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="t-0znnbxc"/><path class="be0htwbow"/></g>`,
		"fallback": "proicons:coffee-hot",
	});
}

export default Component;

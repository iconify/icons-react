import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bgj5nhvcz.css';
import '../../css/m/mjyk0m7ab.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bgj5nhvcz"/><path class="mjyk0m7ab"/>`,
		"fallback": "formkit:close",
	});
}

export default Component;

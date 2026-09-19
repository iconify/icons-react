import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v_18fpb1v.css';

const viewBox = {"width":666,"height":680};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v_18fpb1v"/>`,
		"fallback": "ls:external",
	});
}

export default Component;

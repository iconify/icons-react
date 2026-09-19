import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6wxmobls.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6wxmobls"/>`,
		"fallback": "fa7-solid:car-crash",
	});
}

export default Component;

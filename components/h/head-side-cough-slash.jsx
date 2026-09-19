import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cvrsq3era.css';

const viewBox = {"width":640,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cvrsq3era"/>`,
		"fallback": "fa6-solid:head-side-cough-slash",
	});
}

export default Component;

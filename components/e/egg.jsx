import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/epuliwv2v.css';

const viewBox = {"width":384,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="epuliwv2v"/>`,
		"fallback": "fa6-solid:egg",
	});
}

export default Component;

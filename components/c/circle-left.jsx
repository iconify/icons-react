import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/che1mymjj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="che1mymjj"/>`,
		"fallback": "fa6-solid:circle-left",
	});
}

export default Component;

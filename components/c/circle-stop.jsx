import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u21cuog4o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u21cuog4o"/>`,
		"fallback": "fa6-solid:circle-stop",
	});
}

export default Component;

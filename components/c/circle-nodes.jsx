import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ev134hbui.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ev134hbui"/>`,
		"fallback": "fa6-solid:circle-nodes",
	});
}

export default Component;

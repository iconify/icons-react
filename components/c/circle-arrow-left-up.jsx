import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yby7n0bpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yby7n0bpx"/>`,
		"fallback": "reicon:circle-arrow-left-up",
	});
}

export default Component;

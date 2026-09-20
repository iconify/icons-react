import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjbns-bvr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjbns-bvr"/>`,
		"fallback": "mdi:class",
	});
}

export default Component;

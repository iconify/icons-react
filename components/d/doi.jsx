import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qva2j-bqj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qva2j-bqj"/>`,
		"fallback": "academicons:doi",
	});
}

export default Component;

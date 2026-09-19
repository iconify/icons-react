import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zk8kwsb0p.css';

const viewBox = {"width":488,"height":496};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zk8kwsb0p"/>`,
		"fallback": "zmdi:brightness-auto",
	});
}

export default Component;

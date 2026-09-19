import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scnhz4brj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scnhz4brj"/>`,
		"fallback": "fa-solid:industry",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/esxy8zbeq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="esxy8zbeq"/>`,
		"fallback": "la:globe-asia-solid",
	});
}

export default Component;

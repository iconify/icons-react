import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qppkd2b9z.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qppkd2b9z"/>`,
		"fallback": "fa6-solid:box",
	});
}

export default Component;

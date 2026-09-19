import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/svg3_r69m.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="svg3_r69m"/>`,
		"fallback": "fa:glass",
	});
}

export default Component;

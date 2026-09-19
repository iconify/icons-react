import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eid4dliao.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eid4dliao"/>`,
		"fallback": "fa-solid:atom",
	});
}

export default Component;

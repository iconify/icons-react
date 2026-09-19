import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fl_9c8bsg.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fl_9c8bsg"/>`,
		"fallback": "ant-design:heat-map-outlined",
	});
}

export default Component;

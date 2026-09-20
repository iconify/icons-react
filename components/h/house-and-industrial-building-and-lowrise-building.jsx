import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mq5m95a3i.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mq5m95a3i"/>`,
		"fallback": "pinhead:house-and-industrial-building-and-lowrise-building",
	});
}

export default Component;

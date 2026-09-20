import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vy1azp4oi.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vy1azp4oi"/>`,
		"fallback": "memory:box-light-up-left-stipple",
	});
}

export default Component;

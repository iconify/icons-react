import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdjyulb7c.css';

const viewBox = {"width":384,"height":432};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdjyulb7c"/>`,
		"fallback": "zmdi:graphic-eq",
	});
}

export default Component;

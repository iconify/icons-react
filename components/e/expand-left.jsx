import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-4jio4dy.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o-4jio4dy"/>`,
		"fallback": "cil:expand-left",
	});
}

export default Component;

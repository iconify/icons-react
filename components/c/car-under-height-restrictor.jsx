import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o9zj9mq8s.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o9zj9mq8s"/>`,
		"fallback": "pinhead:car-under-height-restrictor",
	});
}

export default Component;

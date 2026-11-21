import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/omuyjcckl.css';

const viewBox = {"width":9956,"height":700,"left":55,"top":142};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="omuyjcckl"/>`,
		"fallback": "thesvg:claude-of-tanks",
	});
}

export default Component;

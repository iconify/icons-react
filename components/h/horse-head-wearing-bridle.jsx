import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/se0wmr1vr.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="se0wmr1vr"/>`,
		"fallback": "pinhead:horse-head-wearing-bridle",
	});
}

export default Component;

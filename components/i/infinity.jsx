import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn5s926kd.css';

const viewBox = {"width":640,"height":640};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn5s926kd"/>`,
		"fallback": "fa7-solid:infinity",
	});
}

export default Component;

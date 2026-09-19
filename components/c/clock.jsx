import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3eo2xxnl.css';

const viewBox = {"width":1664,"height":1664};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3eo2xxnl"/>`,
		"fallback": "vs:clock",
	});
}

export default Component;

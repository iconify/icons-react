import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odelaxbie.css';
import '../../css/w/wuhamvb4f.css';

const viewBox = {"width":400,"height":400};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="odelaxbie"/><path class="wuhamvb4f"/>`,
		"fallback": "thesvg-color:backloggd",
	});
}

export default Component;

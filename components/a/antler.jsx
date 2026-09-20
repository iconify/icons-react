import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hzprjac0l.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hzprjac0l"/>`,
		"fallback": "pinhead:antler",
	});
}

export default Component;

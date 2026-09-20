import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wz63_s8wc.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wz63_s8wc"/>`,
		"fallback": "memory:box-light-round-down-right-stipple",
	});
}

export default Component;

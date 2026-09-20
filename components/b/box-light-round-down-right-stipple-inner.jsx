import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xqw0mlbbm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xqw0mlbbm"/>`,
		"fallback": "memory:box-light-round-down-right-stipple-inner",
	});
}

export default Component;

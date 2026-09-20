import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hm5iofbrv.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hm5iofbrv"/>`,
		"fallback": "memory:box-light-horizontal-up-stipple",
	});
}

export default Component;

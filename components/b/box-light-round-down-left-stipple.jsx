import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx42tzd2r.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jx42tzd2r"/>`,
		"fallback": "memory:box-light-round-down-left-stipple",
	});
}

export default Component;

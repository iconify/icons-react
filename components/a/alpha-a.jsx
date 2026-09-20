import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vczdkt4km.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vczdkt4km"/>`,
		"fallback": "memory:alpha-a",
	});
}

export default Component;

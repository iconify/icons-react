import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ic9hsnbff.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ic9hsnbff"/>`,
		"fallback": "memory:box-light-vertical-stipple-left",
	});
}

export default Component;

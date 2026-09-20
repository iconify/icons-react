import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vuclicc9t.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vuclicc9t"/>`,
		"fallback": "memory:box-outer-light-down-left",
	});
}

export default Component;

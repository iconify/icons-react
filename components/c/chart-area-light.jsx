import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a73y-rygy.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a73y-rygy"/>`,
		"fallback": "pullo:chart-area-light",
	});
}

export default Component;

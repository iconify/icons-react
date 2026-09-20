import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uoltbib6d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uoltbib6d"/>`,
		"fallback": "mdi:alert-circle-success",
	});
}

export default Component;

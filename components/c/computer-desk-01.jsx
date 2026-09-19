import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cb95o6e0d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cb95o6e0d"/>`,
		"fallback": "hugeicons:computer-desk-01",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts3yx7bls.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ts3yx7bls"/>`,
		"fallback": "mdi:head-minus-outline",
	});
}

export default Component;

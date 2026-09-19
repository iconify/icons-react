import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzmvx9hyr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzmvx9hyr"/>`,
		"fallback": "fa6-solid:faucet",
	});
}

export default Component;

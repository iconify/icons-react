import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpyid4bwc.css';

const viewBox = {"width":256,"height":384};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpyid4bwc"/>`,
		"fallback": "zmdi:chevron-down",
	});
}

export default Component;

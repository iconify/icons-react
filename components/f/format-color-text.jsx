import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/da7ij4b_o.css';

const viewBox = {"width":512,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="da7ij4b_o"/>`,
		"fallback": "zmdi:format-color-text",
	});
}

export default Component;

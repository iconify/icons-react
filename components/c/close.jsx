import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kztwflb_b.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kztwflb_b"/>`,
		"fallback": "iwwa:close",
	});
}

export default Component;

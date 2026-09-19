import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec6oarpox.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec6oarpox"/>`,
		"fallback": "f7:backward-end-fill",
	});
}

export default Component;

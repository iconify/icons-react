import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qirr8n72d.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qirr8n72d"/>`,
		"fallback": "f7:equal-circle-fill",
	});
}

export default Component;

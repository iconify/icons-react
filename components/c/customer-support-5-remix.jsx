import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qmy1myb9v.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qmy1myb9v"/>`,
		"fallback": "streamline-flex:customer-support-5-remix",
	});
}

export default Component;

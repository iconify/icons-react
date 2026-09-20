import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wu1rcw3ym.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wu1rcw3ym"/>`,
		"fallback": "streamline-flex:customer-support-7-solid",
	});
}

export default Component;

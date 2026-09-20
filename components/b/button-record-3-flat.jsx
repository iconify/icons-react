import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5780hbgv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5780hbgv"/>`,
		"fallback": "streamline-color:button-record-3-flat",
	});
}

export default Component;

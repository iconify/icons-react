import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/szu8u-bej.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="szu8u-bej"/>`,
		"fallback": "streamline-color:arrow-round-right-flat",
	});
}

export default Component;

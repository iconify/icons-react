import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g77xi_7ot.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="g77xi_7ot"/>`,
		"fallback": "streamline:browser-wifi-remix",
	});
}

export default Component;

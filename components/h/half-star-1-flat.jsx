import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxo58abkx.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mxo58abkx"/>`,
		"fallback": "streamline-color:half-star-1-flat",
	});
}

export default Component;

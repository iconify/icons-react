import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fyt3ujpva.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fyt3ujpva"/>`,
		"fallback": "streamline-flex:fingerprint-1-remix",
	});
}

export default Component;

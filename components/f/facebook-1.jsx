import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w9j72lbvg.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w9j72lbvg"/>`,
		"fallback": "streamline-flex:facebook-1",
	});
}

export default Component;

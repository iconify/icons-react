import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lae7oe6wh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lae7oe6wh"/>`,
		"fallback": "streamline-flex:crown-remix",
	});
}

export default Component;

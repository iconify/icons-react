import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ph6a7wb4j.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ph6a7wb4j"/>`,
		"fallback": "streamline-color:bitcoin",
	});
}

export default Component;

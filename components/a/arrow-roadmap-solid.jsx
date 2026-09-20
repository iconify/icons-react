import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juppqd1qh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="juppqd1qh"/>`,
		"fallback": "streamline-flex:arrow-roadmap-solid",
	});
}

export default Component;

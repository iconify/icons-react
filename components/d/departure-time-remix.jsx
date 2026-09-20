import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jr2e7hb1o.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jr2e7hb1o"/>`,
		"fallback": "streamline-flex:departure-time-remix",
	});
}

export default Component;

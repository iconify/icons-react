import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vwol2udio.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vwol2udio"/>`,
		"fallback": "streamline:discount-percent-badge-remix",
	});
}

export default Component;

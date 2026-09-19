import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i-5f8acbs.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i-5f8acbs"/>`,
		"fallback": "fa6-solid:diagram-predecessor",
	});
}

export default Component;

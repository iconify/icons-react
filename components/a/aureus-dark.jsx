import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ydaa2vbqk.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ydaa2vbqk"/>`,
		"fallback": "selfhst:aureus-dark",
	});
}

export default Component;

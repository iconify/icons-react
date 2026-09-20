import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvb524s4s.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvb524s4s"/>`,
		"fallback": "zondicons:bolt",
	});
}

export default Component;

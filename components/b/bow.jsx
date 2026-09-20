import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wro4prbqd.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wro4prbqd"/>`,
		"fallback": "streamline-color:bow",
	});
}

export default Component;

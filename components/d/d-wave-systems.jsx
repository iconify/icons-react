import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ybu4mabje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ybu4mabje"/>`,
		"fallback": "thesvg:d-wave-systems",
	});
}

export default Component;

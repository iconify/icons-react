import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipcy7l2ps.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ipcy7l2ps"/>`,
		"fallback": "streamline:electric-cord-3-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0rx2xbkf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0rx2xbkf"/>`,
		"fallback": "lucide:book-minus",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojsrhkbvi.css';

const viewBox = {"width":1000,"height":1000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojsrhkbvi"/>`,
		"fallback": "websymbol:facebook-rect",
	});
}

export default Component;

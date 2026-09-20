import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hwf2drwlq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hwf2drwlq"/>`,
		"fallback": "pinhead:arrow-top-left",
	});
}

export default Component;

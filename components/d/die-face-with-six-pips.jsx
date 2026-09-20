import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p928398kq.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p928398kq"/>`,
		"fallback": "pinhead:die-face-with-six-pips",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xxke6-btq.css';

const viewBox = {"width":717,"height":621};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xxke6-btq"/>`,
		"fallback": "ls:addstar",
	});
}

export default Component;

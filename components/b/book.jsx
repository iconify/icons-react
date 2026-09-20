import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf5u_qbbe.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf5u_qbbe"/>`,
		"fallback": "ix:book",
	});
}

export default Component;

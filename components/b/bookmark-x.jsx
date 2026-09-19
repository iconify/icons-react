import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qbez4kq0u.css';
import '../../css/g/gfk4z3biw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qbez4kq0u"/><path class="gfk4z3biw"/>`,
		"fallback": "boxicons:bookmark-x",
	});
}

export default Component;

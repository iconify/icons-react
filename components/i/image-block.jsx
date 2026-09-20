import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt2w0dbcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt2w0dbcj"/>`,
		"fallback": "uil:image-block",
	});
}

export default Component;

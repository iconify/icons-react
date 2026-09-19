import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rjy99ybww.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rjy99ybww"/>`,
		"fallback": "hugeicons:computer-add",
	});
}

export default Component;

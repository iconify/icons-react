import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvmku2bra.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xvmku2bra"/>`,
		"fallback": "mingcute:chinese-knot-fill",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u_xk6kb_j.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u_xk6kb_j"/>`,
		"fallback": "f7:hand-raised-slash",
	});
}

export default Component;

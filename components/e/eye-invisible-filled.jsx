import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pqys2lycf.css';
import '../../css/u/u_u3qq80h.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pqys2lycf"/><path class="u_u3qq80h"/>`,
		"fallback": "ant-design:eye-invisible-filled",
	});
}

export default Component;

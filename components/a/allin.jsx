import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xvzfdpbjs.css';
import '../../css/g/gicv_hb8e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xvzfdpbjs"/><path class="gicv_hb8e"/>`,
		"fallback": "token:allin",
	});
}

export default Component;

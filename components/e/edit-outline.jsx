import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrac4jb6o.css';
import '../../css/l/lbx2im02e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wrac4jb6o"/><path class="lbx2im02e"/>`,
		"fallback": "basil:edit-outline",
	});
}

export default Component;

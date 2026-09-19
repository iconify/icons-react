import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gn_saxb8w.css';
import '../../css/b/bkpxyzsbx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gn_saxb8w"/><path class="bkpxyzsbx"/>`,
		"fallback": "bx:bx-lemon",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jmi9_q11s.css';
import '../../css/x/x446f-znb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jmi9_q11s"/><path clip-rule="evenodd" class="x446f-znb"/>`,
		"fallback": "solar:gallery-edit-bold",
	});
}

export default Component;

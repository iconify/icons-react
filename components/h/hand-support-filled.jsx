import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wk-i4_xvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="wk-i4_xvv"/>`,
		"fallback": "griddy-icons:hand-support-filled",
	});
}

export default Component;

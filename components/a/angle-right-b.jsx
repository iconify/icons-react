import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loowl_btu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loowl_btu"/>`,
		"fallback": "uil:angle-right-b",
	});
}

export default Component;

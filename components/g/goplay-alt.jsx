import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/shl10mbpk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="shl10mbpk"/>`,
		"fallback": "cbi:goplay-alt",
	});
}

export default Component;

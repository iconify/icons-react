import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw_sl3b8u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="iw_sl3b8u"/>`,
		"fallback": "reicon:circle-arrow-down2-filled",
	});
}

export default Component;

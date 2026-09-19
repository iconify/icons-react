import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iq1_qoxvm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iq1_qoxvm"/>`,
		"fallback": "bx:bxs-flag",
	});
}

export default Component;

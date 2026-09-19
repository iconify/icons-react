import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zudnjtb2w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zudnjtb2w"/>`,
		"fallback": "bx:bx-trophy",
	});
}

export default Component;

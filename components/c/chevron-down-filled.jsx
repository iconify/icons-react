import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oji5awbvx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oji5awbvx"/>`,
		"fallback": "tabler:chevron-down-filled",
	});
}

export default Component;

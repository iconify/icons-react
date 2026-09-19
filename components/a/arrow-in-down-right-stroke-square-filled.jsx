import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvbix7bxx.css';
import '../../css/s/sldl10bkj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tvbix7bxx"/><path class="sldl10bkj"/>`,
		"fallback": "boxicons:arrow-in-down-right-stroke-square-filled",
	});
}

export default Component;

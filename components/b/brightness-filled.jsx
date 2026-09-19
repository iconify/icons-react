import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wua8ckbju.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wua8ckbju"/>`,
		"fallback": "boxicons:brightness-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko66yhb_i.css';
import '../../css/u/uvq16eblf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ko66yhb_i"/><path class="uvq16eblf"/>`,
		"fallback": "boxicons:image-sparkle",
	});
}

export default Component;

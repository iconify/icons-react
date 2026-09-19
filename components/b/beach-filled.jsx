import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v7c0-q0sw.css';
import '../../css/s/sgg5g4blt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v7c0-q0sw"/><path class="sgg5g4blt"/>`,
		"fallback": "boxicons:beach-filled",
	});
}

export default Component;

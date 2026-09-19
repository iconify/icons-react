import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxq40_bto.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jxq40_bto"/>`,
		"fallback": "boxicons:clock-5-filled",
	});
}

export default Component;

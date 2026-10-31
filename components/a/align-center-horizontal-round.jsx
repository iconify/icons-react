import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zyt6-xbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zyt6-xbod"/>`,
		"fallback": "coolicons:align-center-horizontal-round",
	});
}

export default Component;

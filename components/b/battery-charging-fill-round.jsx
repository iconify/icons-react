import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zy_bwvbqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zy_bwvbqd"/>`,
		"fallback": "coolicons:battery-charging-fill-round",
	});
}

export default Component;

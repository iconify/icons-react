import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygi4r2b3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ygi4r2b3w"/>`,
		"fallback": "coolicons:chart-area-round",
	});
}

export default Component;

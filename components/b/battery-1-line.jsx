import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ys6vs2qzv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ys6vs2qzv"/>`,
		"fallback": "mingcute:battery-1-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yym1m5i-m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yym1m5i-m"/>`,
		"fallback": "streamline-freehand:dashboard-layout",
	});
}

export default Component;

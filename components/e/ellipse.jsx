import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wl2zdmyxl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="wl2zdmyxl"/>`,
		"fallback": "lucide:ellipse",
	});
}

export default Component;

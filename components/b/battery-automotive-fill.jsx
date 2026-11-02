import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vt6z-vbxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vt6z-vbxw"/>`,
		"fallback": "mingcute:battery-automotive-fill",
	});
}

export default Component;

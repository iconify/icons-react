import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vdr35o1ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vdr35o1ib"/>`,
		"fallback": "mingcute:father-christmas-fill",
	});
}

export default Component;

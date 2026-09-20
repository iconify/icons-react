import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vto9lnb-w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vto9lnb-w"/>`,
		"fallback": "mingcute:file-info-fill",
	});
}

export default Component;

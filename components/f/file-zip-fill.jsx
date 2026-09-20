import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjtl87boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjtl87boe"/>`,
		"fallback": "mingcute:file-zip-fill",
	});
}

export default Component;

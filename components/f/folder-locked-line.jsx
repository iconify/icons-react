import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u0uhiy9nl.css';
import '../../css/w/wgbln989c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u0uhiy9nl"/><path class="wgbln989c"/>`,
		"fallback": "mingcute:folder-locked-line",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pkwhx1bhm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pkwhx1bhm"/>`,
		"fallback": "iconamoon:frame",
	});
}

export default Component;

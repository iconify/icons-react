import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gi9y0klwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gi9y0klwx"/>`,
		"fallback": "uil:cloud-data-connection",
	});
}

export default Component;

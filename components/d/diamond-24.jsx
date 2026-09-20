import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbx_tybht.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbx_tybht"/>`,
		"fallback": "octicon:diamond-24",
	});
}

export default Component;

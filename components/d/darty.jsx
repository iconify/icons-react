import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehx-u_b9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehx-u_b9d"/>`,
		"fallback": "thesvg-color:darty",
	});
}

export default Component;

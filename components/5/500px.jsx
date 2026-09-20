import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lbr64l8xw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lbr64l8xw"/>`,
		"fallback": "thesvg-color:500px",
	});
}

export default Component;

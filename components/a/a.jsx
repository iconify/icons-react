import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvr3so9tk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvr3so9tk"/>`,
		"fallback": "token:a",
	});
}

export default Component;

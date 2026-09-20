import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/h2umeba-b.css';
import '../../css/y/y295kubtu.css';
import '../../css/f/fa2cnrb7y.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="h2umeba-b"/><path class="y295kubtu"/><path class="fa2cnrb7y"/></g>`,
		"fallback": "streamline-color:creative-commons",
	});
}

export default Component;

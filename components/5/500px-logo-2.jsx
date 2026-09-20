import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/q/qdeua8o8d.css';
import '../../css/g/gpa15w4nl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="qdeua8o8d"/><path class="gpa15w4nl"/></g>`,
		"fallback": "streamline-logos:500px-logo-2",
	});
}

export default Component;

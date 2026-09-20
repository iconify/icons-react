import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/o5t9u752s.css';
import '../../css/n/ndy1iukod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="o5t9u752s"/><path class="ndy1iukod"/></g>`,
		"fallback": "streamline-logos:aim-logo",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/a/aznomsb9b.css';
import '../../css/f/f560z8mya.css';
import '../../css/t/tdophacau.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="aznomsb9b"/><path class="f560z8mya"/><path class="tdophacau"/></g>`,
		"fallback": "streamline-logos:diigo-logo-2",
	});
}

export default Component;

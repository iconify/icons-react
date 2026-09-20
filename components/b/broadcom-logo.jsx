import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/j/jodva9y7b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="jodva9y7b"/></g>`,
		"fallback": "streamline-logos:broadcom-logo",
	});
}

export default Component;

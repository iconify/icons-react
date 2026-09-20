import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/j/j697l3uzc.css';
import '../../css/u/u0qmyubfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="j697l3uzc"/><path class="u0qmyubfx"/></g>`,
		"fallback": "streamline-logos:grooveshark-logo",
	});
}

export default Component;

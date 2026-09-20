import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/i/imy0i1b4g.css';
import '../../css/y/yn9i0v84q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="imy0i1b4g"/><path class="yn9i0v84q"/></g>`,
		"fallback": "streamline-logos:angular-logo",
	});
}

export default Component;

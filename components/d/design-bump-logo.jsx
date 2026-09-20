import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/o/osjjqf7zh.css';
import '../../css/b/bolhg9b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="osjjqf7zh"/><path class="bolhg9b9q"/></g>`,
		"fallback": "streamline-logos:design-bump-logo",
	});
}

export default Component;

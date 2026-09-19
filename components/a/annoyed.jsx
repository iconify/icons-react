import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/b/b4q8hn6zn.css';
import '../../css/v/ve52mc42u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="b4q8hn6zn"/><path class="ve52mc42u"/></g>`,
		"fallback": "hugeicons:annoyed",
	});
}

export default Component;

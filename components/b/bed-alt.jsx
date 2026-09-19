import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pdmcwwjrs.css';
import '../../css/o/o0t7-245s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pdmcwwjrs"/><path class="o0t7-245s"/>`,
		"fallback": "boxicons:bed-alt",
	});
}

export default Component;

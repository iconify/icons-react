import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rsvixqz3a.css';
import '../../css/z/zh4lfjb_a.css';
import '../../css/r/r0xk6xbrb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rsvixqz3a"/><circle class="zh4lfjb_a"/><path class="r0xk6xbrb"/></g>`,
		"fallback": "lets-icons:folder-search-fill",
	});
}

export default Component;

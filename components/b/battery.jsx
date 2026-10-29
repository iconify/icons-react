import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/nn2sdrbun.css';
import '../../css/i/i913gobhf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="nn2sdrbun"/><path class="i913gobhf wm-a"/></g>`,
		"fallback": "withicons:battery",
	});
}

export default Component;

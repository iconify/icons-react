import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/c/cgrq_9bsc.css';
import '../../css/f/f5ws3ab9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="cgrq_9bsc"/><path class="f5ws3ab9d"/></g>`,
		"fallback": "streamline-sharp:customer-support-1",
	});
}

export default Component;

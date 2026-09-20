import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qo18at6dq.css';
import '../../css/h/heyitldup.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="qo18at6dq"/><path class="heyitldup"/></g>`,
		"fallback": "streamline-flex-color:bow-tie-flat",
	});
}

export default Component;

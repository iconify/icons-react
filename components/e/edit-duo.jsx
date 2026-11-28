import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nszsuhv2a.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/i/iadswjb9y.css';
import '../../css/k/kaq0l3eog.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nszsuhv2a secondary"/><g class="dt0cm9dhy primary"><path class="iadswjb9y"/><path class="kaq0l3eog"/></g>`,
		"fallback": "iconaut:edit-duo",
	});
}

export default Component;

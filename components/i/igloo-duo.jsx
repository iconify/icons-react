import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/az4b1ibtm.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/lzukngbwu.css';
import '../../css/q/qojeivbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="az4b1ibtm secondary"/><g class="dt0cm9dhy primary"><path class="lzukngbwu"/><path class="qojeivbpm"/></g>`,
		"fallback": "iconaut:igloo-duo",
	});
}

export default Component;

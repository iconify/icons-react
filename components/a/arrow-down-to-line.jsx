import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/maguq-_ya.css';
import '../../css/e/eyr57ibcj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="maguq-_ya wm-a"/><path class="eyr57ibcj"/></g>`,
		"fallback": "withicons:arrow-down-to-line",
	});
}

export default Component;

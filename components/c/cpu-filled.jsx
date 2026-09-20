import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eccbwzb_m.css';
import '../../css/n/nq39egbbv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eccbwzb_m"/><path class="nq39egbbv"/>`,
		"fallback": "tdesign:cpu-filled",
	});
}

export default Component;

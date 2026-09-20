import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m7of0hbqk.css';
import '../../css/k/klhdv0ueo.css';

const viewBox = {"width":21,"height":21};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(2 3)" class="bi12bsetm"><path class="m7of0hbqk"/><circle class="klhdv0ueo"/></g>`,
		"fallback": "system-uicons:gauge",
	});
}

export default Component;

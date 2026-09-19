import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ift012_ct.css';
import '../../css/o/ockmixada.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ift012_ct"/><path class="ockmixada"/>`,
		"fallback": "bx:bx-basket",
	});
}

export default Component;

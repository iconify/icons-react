import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m8u4nj3lr.css';
import '../../css/l/lv7a0p21m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m8u4nj3lr"/><path class="lv7a0p21m"/>`,
		"fallback": "bx:bx-folder-minus",
	});
}

export default Component;

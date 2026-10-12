import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z6793nbga.css';
import '../../css/g/gb4owskje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z6793nbga"/><path class="gb4owskje"/></g>`,
		"fallback": "andrsrxn:fork",
	});
}

export default Component;

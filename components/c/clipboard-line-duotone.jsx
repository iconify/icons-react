import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/s/sizysxbwg.css';
import '../../css/o/oqzpqv97y.css';
import '../../css/x/xszjfht3t.css';
import '../../css/q/qu0eyjbrg.css';
import '../../css/m/my5268blj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="sizysxbwg"/><path class="oqzpqv97y"/><path class="xszjfht3t"/><path class="qu0eyjbrg"/><path class="my5268blj"/></g>`,
		"fallback": "solar:clipboard-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/tgy8uab8v.css';
import '../../css/h/hea1y1b2z.css';
import '../../css/e/e-ope2q4f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="tgy8uab8v"/><path class="hea1y1b2z"/><path class="e-ope2q4f"/></g>`,
		"fallback": "iconaut:folder-symlink",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g6kfekqvf.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/o/ob67c_b2q.css';
import '../../css/s/sb6huacei.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g6kfekqvf secondary"/><g class="dt0cm9dhy primary"><path class="ob67c_b2q"/><path class="sb6huacei"/></g>`,
		"fallback": "iconaut:cloud-drizzle-duo",
	});
}

export default Component;

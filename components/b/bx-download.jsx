import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/osp4wzbqk.css';
import '../../css/u/uotgxeb7k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="osp4wzbqk"/><path class="uotgxeb7k"/>`,
		"fallback": "bx:bx-download",
	});
}

export default Component;

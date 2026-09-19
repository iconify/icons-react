import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/himehxbog.css';
import '../../css/p/prj3bzzpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="himehxbog"/><path class="prj3bzzpq"/>`,
		"fallback": "bx:bx-volume-full",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h2hrn6q5s.css';
import '../../css/d/ddwbobcpa.css';
import '../../css/l/l2skeeb_k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h2hrn6q5s"/><path class="ddwbobcpa"/><path class="l2skeeb_k"/>`,
		"fallback": "bx:duplicate",
	});
}

export default Component;

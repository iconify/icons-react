import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z9hb5yb2a.css';
import '../../css/g/gctaj9b_q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z9hb5yb2a"/><path class="gctaj9b_q"/>`,
		"fallback": "bx:bx-globe-alt",
	});
}

export default Component;

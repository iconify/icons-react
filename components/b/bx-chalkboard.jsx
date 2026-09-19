import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iey856b5w.css';
import '../../css/a/aelxiub-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iey856b5w"/><path class="aelxiub-n"/>`,
		"fallback": "bx:bx-chalkboard",
	});
}

export default Component;

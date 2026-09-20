import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b-9wr3b2d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b-9wr3b2d"/>`,
		"fallback": "ri:apps-fill",
	});
}

export default Component;

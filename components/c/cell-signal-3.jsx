import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b4gp_-1gl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b4gp_-1gl"/>`,
		"fallback": "tabler:cell-signal-3",
	});
}

export default Component;

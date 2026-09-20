import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/csuic1o1x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="csuic1o1x"/>`,
		"fallback": "tabler:graph-filled",
	});
}

export default Component;

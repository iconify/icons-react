import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sl8frbc0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sl8frbc0y"/>`,
		"fallback": "boxicons:broccoli-filled",
	});
}

export default Component;

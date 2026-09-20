import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nyf3bpbxn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nyf3bpbxn"/>`,
		"fallback": "mdi-light:arrow-up",
	});
}

export default Component;

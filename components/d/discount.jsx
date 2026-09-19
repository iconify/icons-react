import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jaw_k0c7g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jaw_k0c7g"/>`,
		"fallback": "bxs:discount",
	});
}

export default Component;

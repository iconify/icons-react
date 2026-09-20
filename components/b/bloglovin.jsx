import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fas4occ8k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fas4occ8k"/>`,
		"fallback": "simple-icons:bloglovin",
	});
}

export default Component;

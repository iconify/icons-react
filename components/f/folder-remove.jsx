import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jt-cg6y3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jt-cg6y3d"/>`,
		"fallback": "hugeicons:folder-remove",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy60grbdp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oy60grbdp"/>`,
		"fallback": "hugeicons:folder-file-storage",
	});
}

export default Component;

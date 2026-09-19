import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/isnxa6b2r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="isnxa6b2r"/>`,
		"fallback": "boxicons:cursor-cell-filled",
	});
}

export default Component;

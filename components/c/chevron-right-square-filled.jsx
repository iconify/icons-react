import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln7ya2bio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln7ya2bio"/>`,
		"fallback": "boxicons:chevron-right-square-filled",
	});
}

export default Component;

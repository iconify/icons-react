import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oy7f59chl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="oy7f59chl"/>`,
		"fallback": "majesticons:cpu",
	});
}

export default Component;

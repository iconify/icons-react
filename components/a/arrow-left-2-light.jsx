import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o_pfi2b2k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o_pfi2b2k"/>`,
		"fallback": "iconamoon:arrow-left-2-light",
	});
}

export default Component;

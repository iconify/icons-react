import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p22skhu_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p22skhu_p"/>`,
		"fallback": "iconamoon:arrow-top-right-1-light",
	});
}

export default Component;

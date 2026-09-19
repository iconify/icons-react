import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/syz0a_bgj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="syz0a_bgj"/>`,
		"fallback": "iconamoon:arrow-down-2",
	});
}

export default Component;

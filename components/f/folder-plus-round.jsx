import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym4d8ub0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym4d8ub0l"/>`,
		"fallback": "coolicons:folder-plus-round",
	});
}

export default Component;

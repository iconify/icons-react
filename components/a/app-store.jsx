import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ujf0-3dpt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ujf0-3dpt"/>`,
		"fallback": "ci:app-store",
	});
}

export default Component;

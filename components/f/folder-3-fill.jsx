import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s96jp3eng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s96jp3eng"/>`,
		"fallback": "mingcute:folder-3-fill",
	});
}

export default Component;

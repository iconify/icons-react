import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dj6zht45s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dj6zht45s"/>`,
		"fallback": "mingcute:file-warning-fill",
	});
}

export default Component;

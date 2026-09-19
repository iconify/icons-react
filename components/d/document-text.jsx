import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mf4l44b9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mf4l44b9z"/>`,
		"fallback": "heroicons:document-text",
	});
}

export default Component;

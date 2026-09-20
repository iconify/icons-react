import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iced0ob2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iced0ob2f"/>`,
		"fallback": "mdi:file-document-refresh-outline",
	});
}

export default Component;

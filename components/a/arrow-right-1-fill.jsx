import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hz7z-qbly.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hz7z-qbly"/>`,
		"fallback": "iconamoon:arrow-right-1-fill",
	});
}

export default Component;

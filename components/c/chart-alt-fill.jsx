import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ygo2ytbla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ygo2ytbla"/>`,
		"fallback": "lets-icons:chart-alt-fill",
	});
}

export default Component;

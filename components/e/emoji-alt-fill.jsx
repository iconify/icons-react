import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qgf6tkv2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qgf6tkv2q"/>`,
		"fallback": "si:emoji-alt-fill",
	});
}

export default Component;

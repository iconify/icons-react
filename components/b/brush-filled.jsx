import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ym7ozqbox.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ym7ozqbox"/>`,
		"fallback": "tdesign:brush-filled",
	});
}

export default Component;

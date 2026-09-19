import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pfu8axb7s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pfu8axb7s"/>`,
		"fallback": "gg:insights",
	});
}

export default Component;

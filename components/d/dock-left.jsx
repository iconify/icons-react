import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y90bmesln.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="y90bmesln"/>`,
		"fallback": "gg:dock-left",
	});
}

export default Component;

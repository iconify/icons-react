import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xd45x_ltj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xd45x_ltj"/>`,
		"fallback": "si:ai-note-alt-1-fill",
	});
}

export default Component;

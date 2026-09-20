import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/urxzsob5v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="urxzsob5v"/>`,
		"fallback": "tabler:ghost-2-filled",
	});
}

export default Component;

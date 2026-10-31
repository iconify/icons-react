import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mw3kgqb3q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mw3kgqb3q"/>`,
		"fallback": "coolicons:folder-edit-fill-round",
	});
}

export default Component;

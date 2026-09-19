import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v6b6mob6n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v6b6mob6n"/>`,
		"fallback": "griddy-icons:blood-drop-plus-filled",
	});
}

export default Component;

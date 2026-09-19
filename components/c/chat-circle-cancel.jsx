import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gz3275pob.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gz3275pob"/>`,
		"fallback": "griddy-icons:chat-circle-cancel",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh5xogo6j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="mh5xogo6j"/>`,
		"fallback": "reicon:arrow-down-square-filled",
	});
}

export default Component;

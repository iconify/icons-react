import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fntvaqa0r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fntvaqa0r"/>`,
		"fallback": "reicon:home-user-filled",
	});
}

export default Component;

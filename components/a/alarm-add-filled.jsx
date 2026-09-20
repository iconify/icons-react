import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f4fi1wl0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="f4fi1wl0a"/>`,
		"fallback": "reicon:alarm-add-filled",
	});
}

export default Component;

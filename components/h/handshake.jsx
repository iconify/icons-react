import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h4v9t2bfw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h4v9t2bfw"/>`,
		"fallback": "thesvg-color:handshake",
	});
}

export default Component;

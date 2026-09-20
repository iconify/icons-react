import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-sv5cbsg.css';
import '../../css/e/ejoji3b3r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-sv5cbsg"/><path class="ejoji3b3r"/>`,
		"fallback": "tdesign:houses-filled",
	});
}

export default Component;

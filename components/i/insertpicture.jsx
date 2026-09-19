import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fwhlp8bpu.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fwhlp8bpu"/>`,
		"fallback": "whh:insertpicture",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xs4-vbmfu.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xs4-vbmfu"/>`,
		"fallback": "pinhead:coral",
	});
}

export default Component;

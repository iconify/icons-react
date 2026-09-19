import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ok6lomhrr.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ok6lomhrr"/>`,
		"fallback": "glyphs:heart-hands-outline",
	});
}

export default Component;

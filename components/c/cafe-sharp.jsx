import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/le5ix3lon.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="le5ix3lon"/>`,
		"fallback": "famicons:cafe-sharp",
	});
}

export default Component;

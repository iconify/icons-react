import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j6kkbebxw.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j6kkbebxw"/>`,
		"fallback": "famicons:build-sharp",
	});
}

export default Component;

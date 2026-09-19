import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y-j5tbb0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y-j5tbb0j"/>`,
		"fallback": "famicons:browsers-sharp",
	});
}

export default Component;

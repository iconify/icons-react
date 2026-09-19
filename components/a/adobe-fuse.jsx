import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c9iipm8aj.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="c9iipm8aj"/>`,
		"fallback": "file-icons:adobe-fuse",
	});
}

export default Component;

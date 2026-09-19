import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xo4kztbeg.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xo4kztbeg"/>`,
		"fallback": "file-icons:galaxy",
	});
}

export default Component;

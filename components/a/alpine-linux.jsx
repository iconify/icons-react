import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ojbpt1xwx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ojbpt1xwx"/>`,
		"fallback": "file-icons:alpine-linux",
	});
}

export default Component;

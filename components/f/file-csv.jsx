import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d1pj1tb3h.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d1pj1tb3h"/>`,
		"fallback": "fa6-solid:file-csv",
	});
}

export default Component;

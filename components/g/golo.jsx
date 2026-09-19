import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ypx0rvnvc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ypx0rvnvc"/>`,
		"fallback": "file-icons:golo",
	});
}

export default Component;

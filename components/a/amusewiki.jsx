import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/logf-5bvr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="logf-5bvr"/>`,
		"fallback": "file-icons:amusewiki",
	});
}

export default Component;

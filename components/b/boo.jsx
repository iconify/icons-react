import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yv82bmbkc.css';
import '../../css/x/xb-3e0r0o.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yv82bmbkc"/><path class="xb-3e0r0o"/>`,
		"fallback": "file-icons:boo",
	});
}

export default Component;

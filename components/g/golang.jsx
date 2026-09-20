import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ycy_tv9yp.css';
import '../../css/n/n5h7sdi6r.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ycy_tv9yp"/><path class="n5h7sdi6r"/>`,
		"fallback": "openmoji:golang",
	});
}

export default Component;

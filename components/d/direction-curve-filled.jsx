import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bo-i9d5nt.css';
import '../../css/g/g5gysrbik.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bo-i9d5nt"/><path class="g5gysrbik"/>`,
		"fallback": "carbon:direction-curve-filled",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ob7kc6bcr.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ob7kc6bcr"/>`,
		"fallback": "pullo:clock-plus-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bkh5wzb4e.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bkh5wzb4e"/>`,
		"fallback": "fa6-solid:film",
	});
}

export default Component;

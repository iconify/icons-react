import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v02upobzv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v02upobzv"/>`,
		"fallback": "fa6-solid:arrows-split-up-and-left",
	});
}

export default Component;

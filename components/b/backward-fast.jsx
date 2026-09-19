import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v26rpkb4b.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v26rpkb4b"/>`,
		"fallback": "fa6-solid:backward-fast",
	});
}

export default Component;

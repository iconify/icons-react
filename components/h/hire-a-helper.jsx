import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uel6f8b4j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uel6f8b4j"/>`,
		"fallback": "fa-brands:hire-a-helper",
	});
}

export default Component;

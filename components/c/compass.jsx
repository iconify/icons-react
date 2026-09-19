import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuxhihb9q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuxhihb9q"/>`,
		"fallback": "fa6-solid:compass",
	});
}

export default Component;

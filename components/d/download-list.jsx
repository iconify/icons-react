import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r7812fb8q.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r7812fb8q"/>`,
		"fallback": "ix:download-list",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ae5_81b8m.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ae5_81b8m"/>`,
		"fallback": "ix:analysis",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/o/o6pgdnelc.css';
import '../../css/w/w8puxhb0b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="o6pgdnelc"/><path class="w8puxhb0b"/></g>`,
		"fallback": "reicon:building-coins-filled",
	});
}

export default Component;

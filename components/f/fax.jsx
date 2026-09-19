import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ikwwh-bte.css';
import '../../css/w/w950tvqcf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ikwwh-bte"/><path class="w950tvqcf"/>`,
		"fallback": "cil:fax",
	});
}

export default Component;

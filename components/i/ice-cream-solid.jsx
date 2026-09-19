import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/umkxuccsd.css';
import '../../css/w/wond14b0c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="umkxuccsd"/><path class="wond14b0c"/></g>`,
		"fallback": "iconoir:ice-cream-solid",
	});
}

export default Component;

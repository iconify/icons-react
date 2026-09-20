import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/w/wwy9nfbkb.css';
import '../../css/e/e0x-9xbnl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="wwy9nfbkb"/><path class="e0x-9xbnl"/></g>`,
		"fallback": "solar:cup-music-outline",
	});
}

export default Component;

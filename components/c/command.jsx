import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/a/a_vfb4ntm.css';
import '../../css/g/grhc7w2vk.css';
import '../../css/r/rphn1cc9p.css';
import '../../css/f/f1t-wwxme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="a_vfb4ntm wm-shadow"/><path class="grhc7w2vk wm-shadow"/><path class="rphn1cc9p"/><path class="f1t-wwxme"/></g>`,
		"fallback": "withicons-brutal:command",
	});
}

export default Component;

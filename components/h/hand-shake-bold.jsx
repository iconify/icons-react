import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/a/a26e5acsr.css';
import '../../css/t/twtcyfq0h.css';
import '../../css/z/zpi5qjvum.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="a26e5acsr"/><path class="twtcyfq0h"/><path class="zpi5qjvum"/></g>`,
		"fallback": "solar:hand-shake-bold",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/nzsvzjb4p.css';
import '../../css/i/iihdugb7k.css';

const viewBox = {"width":17,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="nzsvzjb4p"/><path class="iihdugb7k"/></g>`,
		"fallback": "si-glyph:game-controll",
	});
}

export default Component;

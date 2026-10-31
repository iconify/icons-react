import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sevhhpbgi.css';
import '../../css/s/s69mttblo.css';
import '../../css/c/c5y6v1b_m.css';
import '../../css/e/e7iu3mbrq.css';
import '../../css/f/fdz2bc43h.css';
import '../../css/y/ydvcc5vdy.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sevhhpbgi"/><path class="s69mttblo"/><path class="c5y6v1b_m"/><path class="e7iu3mbrq"/><path class="fdz2bc43h"/><path class="ydvcc5vdy"/></g>`,
		"fallback": "streamline-memes:doge-hand-drawn",
	});
}

export default Component;

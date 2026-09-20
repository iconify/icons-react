import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f1vu3gb0c.css';
import '../../css/h/hbnlznkbn.css';
import '../../css/p/paxlopbiy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f1vu3gb0c"/><path class="hbnlznkbn"/><path class="paxlopbiy"/></g>`,
		"fallback": "streamline-freehand:drawer-download",
	});
}

export default Component;

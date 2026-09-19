import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jrqa8sbgj.css';
import '../../css/w/wgqc-tbtq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jrqa8sbgj"/><path class="wgqc-tbtq"/></g>`,
		"fallback": "pepicons:hand-grab",
	});
}

export default Component;

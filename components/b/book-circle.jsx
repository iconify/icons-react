import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/fhv7sem-x.css';
import '../../css/m/mro15pfsn.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="fhv7sem-x"/><path class="mro15pfsn"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:book-circle",
	});
}

export default Component;

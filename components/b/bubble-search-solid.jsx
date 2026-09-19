import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hl4x9aceq.css';
import '../../css/s/sfmnc-1tq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hl4x9aceq"/><path class="sfmnc-1tq"/></g>`,
		"fallback": "iconoir:bubble-search-solid",
	});
}

export default Component;

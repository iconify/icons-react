import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/b/bohz0aboj.css';
import '../../css/g/gegijw-bc.css';
import '../../css/k/kvlujpe3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="bohz0aboj"/><path class="gegijw-bc"/><path class="kvlujpe3w"/></g>`,
		"fallback": "lineicons:arc-browser",
	});
}

export default Component;

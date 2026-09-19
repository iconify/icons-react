import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/t1mywg2eu.css';
import '../../css/s/su_0fqb0p.css';
import '../../css/n/njxkiiehp.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="t1mywg2eu"/><path class="su_0fqb0p"/><path class="njxkiiehp"/></g>`,
		"fallback": "pepicons:arrow-left",
	});
}

export default Component;

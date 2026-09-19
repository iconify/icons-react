import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/n/njxgh_bqy.css';
import '../../css/u/uu99yxb5q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="njxgh_bqy"/><path class="uu99yxb5q"/></g>`,
		"fallback": "healthicons:construction-worker",
	});
}

export default Component;

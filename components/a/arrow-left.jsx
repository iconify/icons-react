import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/s/sn01zlbqh.css';
import '../../css/m/mc4n-6bac.css';
import '../../css/z/zm6gsmbpq.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="sn01zlbqh"/><path class="mc4n-6bac"/><path class="zm6gsmbpq"/></g>`,
		"fallback": "pepicons-pencil:arrow-left",
	});
}

export default Component;

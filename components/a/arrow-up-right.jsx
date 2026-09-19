import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/p/plm7q3bkj.css';
import '../../css/k/ky0155huo.css';
import '../../css/h/h7cc31xbh.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="plm7q3bkj"/><path class="ky0155huo"/><path class="h7cc31xbh"/></g>`,
		"fallback": "pepicons:arrow-up-right",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/m-yrbu6hq.css';
import '../../css/j/j5vme-6vm.css';
import '../../css/j/ju7fwrb5h.css';
import '../../css/x/xrgx2dblx.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="m-yrbu6hq"/><path class="j5vme-6vm"/><path class="ju7fwrb5h"/><path class="xrgx2dblx"/></g>`,
		"fallback": "pepicons-pencil:hourglass-circle",
	});
}

export default Component;

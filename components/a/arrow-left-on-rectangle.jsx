import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/t/titte-vdd.css';
import '../../css/n/nogorccmu.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="titte-vdd"/><path class="nogorccmu"/></g>`,
		"fallback": "heroicons-solid:arrow-left-on-rectangle",
	});
}

export default Component;

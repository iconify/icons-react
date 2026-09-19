import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/a/aw1utkkeq.css';
import '../../css/t/t2k3-abcp.css';

const viewBox = {"width":2000,"height":2000};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="aw1utkkeq"/><path class="t2k3-abcp"/></g>`,
		"fallback": "bpmn:data-input",
	});
}

export default Component;

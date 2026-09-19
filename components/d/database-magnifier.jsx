import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g_a1tolar.css';
import '../../css/p/piy6v7_fe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="g_a1tolar"/><path class="piy6v7_fe"/></g>`,
		"fallback": "gravity-ui:database-magnifier",
	});
}

export default Component;

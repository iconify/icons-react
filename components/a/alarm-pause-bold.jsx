import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/uo5puub8c.css';
import '../../css/w/w04_p95rn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="uo5puub8c"/><path class="w04_p95rn"/></g>`,
		"fallback": "solar:alarm-pause-bold",
	});
}

export default Component;

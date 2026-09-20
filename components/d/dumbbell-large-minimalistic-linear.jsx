import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/vte9i7bqc.css';
import '../../css/y/yinb-z7cx.css';
import '../../css/p/p-7aslvxg.css';
import '../../css/i/ipnosvgas.css';
import '../../css/t/t2m3jlpnn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="vte9i7bqc"/><path class="yinb-z7cx"/><path class="p-7aslvxg"/><path class="ipnosvgas"/><path class="t2m3jlpnn"/></g>`,
		"fallback": "solar:dumbbell-large-minimalistic-linear",
	});
}

export default Component;

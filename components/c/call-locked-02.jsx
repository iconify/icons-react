import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lei3g-6cs.css';
import '../../css/a/anl65xbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="lei3g-6cs"/><path class="anl65xbtr"/></g>`,
		"fallback": "hugeicons:call-locked-02",
	});
}

export default Component;

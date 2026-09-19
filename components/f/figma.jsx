import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/l/lh069obpf.css';
import '../../css/n/n9ed_lrtf.css';
import '../../css/h/h31pzubzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><circle class="lh069obpf"/><path class="n9ed_lrtf"/><path class="h31pzubzy"/></g>`,
		"fallback": "hugeicons:figma",
	});
}

export default Component;

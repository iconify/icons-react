import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tcvz_bb_s.css';
import '../../css/c/cfc7gmban.css';
import '../../css/x/x2j6x9bwh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><path class="tcvz_bb_s"/><path class="cfc7gmban"/><path class="x2j6x9bwh"/></g>`,
		"fallback": "gcp:cloud-healthcare-marketplace",
	});
}

export default Component;

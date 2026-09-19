import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y_cjigwzb.css';
import '../../css/n/npqglvb2w.css';
import '../../css/r/rrljxjbds.css';
import '../../css/x/x6scbdbzy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="y_cjigwzb"/><path class="npqglvb2w"/><path class="rrljxjbds"/><path class="x6scbdbzy"/></g>`,
		"fallback": "hugeicons:chair-02",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/h/hjg66liec.css';
import '../../css/a/ace-nuvps.css';
import '../../css/r/rvd7q59pv.css';
import '../../css/x/xqig0db8h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="hjg66liec"/><path class="ace-nuvps"/><path class="rvd7q59pv"/><path class="xqig0db8h"/></g>`,
		"fallback": "solar:bed-line-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/k/kr4evflrk.css';
import '../../css/j/jdzoki6fy.css';
import '../../css/s/s7et_6b9q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="kr4evflrk"/><path class="jdzoki6fy"/><path class="s7et_6b9q"/></g>`,
		"fallback": "solar:dialog-line-duotone",
	});
}

export default Component;

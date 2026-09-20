import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/t/tslmujbuk.css';
import '../../css/s/s2gsuob4v.css';
import '../../css/j/jswmtpb4p.css';
import '../../css/b/b--td4bgk.css';
import '../../css/l/lyok8tb9e.css';
import '../../css/b/bx1996_eu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="tslmujbuk"/><path class="s2gsuob4v"/><path class="jswmtpb4p"/><path class="b--td4bgk"/><circle class="lyok8tb9e"/><path class="bx1996_eu"/></g>`,
		"fallback": "solar:airbuds-charge-linear",
	});
}

export default Component;

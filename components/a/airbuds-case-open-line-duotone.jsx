import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/a9xa5db_i.css';
import '../../css/u/uyeb4_b5y.css';
import '../../css/n/n6-d6_4kk.css';
import '../../css/d/d-zzacc2s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="a9xa5db_i"/><path class="uyeb4_b5y"/><path class="n6-d6_4kk"/><path class="d-zzacc2s"/></g>`,
		"fallback": "solar:airbuds-case-open-line-duotone",
	});
}

export default Component;

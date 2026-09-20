import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/m0hle6bns.css';
import '../../css/t/t__u0sbvf.css';
import '../../css/d/dbja-cbxu.css';
import '../../css/k/k419u2hhs.css';
import '../../css/u/u3qs2fbmi.css';
import '../../css/h/h7v-cpnwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="m0hle6bns"/><rect class="t__u0sbvf"/><path class="dbja-cbxu"/><rect class="k419u2hhs"/><path class="u3qs2fbmi"/><rect class="h7v-cpnwf"/></g>`,
		"fallback": "proicons:apps-list",
	});
}

export default Component;

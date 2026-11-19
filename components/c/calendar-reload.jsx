import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m1iho-bvd.css';
import '../../css/p/pd-jkbbdm.css';
import '../../css/p/pwqkpsb3n.css';
import '../../css/t/twvm-fv3w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="m1iho-bvd"/><path class="pd-jkbbdm"/><path class="pwqkpsb3n"/><path class="twvm-fv3w"/></g>`,
		"fallback": "andrsrxn:calendar-reload",
	});
}

export default Component;

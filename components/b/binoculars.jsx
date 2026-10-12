import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rvd4_bbpu.css';
import '../../css/k/krqeitb0f.css';
import '../../css/y/yoxqbccrx.css';
import '../../css/x/x1_0p-bru.css';
import '../../css/b/b785i4bzp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rvd4_bbpu"/><path class="krqeitb0f"/><path class="yoxqbccrx"/><path class="x1_0p-bru"/><path class="b785i4bzp"/></g>`,
		"fallback": "andrsrxn:binoculars",
	});
}

export default Component;

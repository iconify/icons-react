import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/swe-3q-nj.css';
import '../../css/k/kjo-2_kpr.css';
import '../../css/p/pvcshacgr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="swe-3q-nj"/><path class="kjo-2_kpr"/><path class="pvcshacgr"/></g>`,
		"fallback": "streamline-ultimate:dribbble-logo",
	});
}

export default Component;

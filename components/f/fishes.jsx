import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/epiz7hbmm.css';
import '../../css/r/rd82_gbdw.css';
import '../../css/g/gphe89_oa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="epiz7hbmm"/><path class="rd82_gbdw"/><path class="gphe89_oa"/></g>`,
		"fallback": "streamline-cyber-color:fishes",
	});
}

export default Component;

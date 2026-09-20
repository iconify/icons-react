import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/w/wkrjssbar.css';
import '../../css/u/u1o373u-g.css';
import '../../css/c/cuxp3pbhc.css';
import '../../css/v/vlb3yfblk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="wkrjssbar"/><path class="u1o373u-g"/><path class="cuxp3pbhc"/><path class="vlb3yfblk"/></g>`,
		"fallback": "streamline-sharp-color:customer-support-setting",
	});
}

export default Component;

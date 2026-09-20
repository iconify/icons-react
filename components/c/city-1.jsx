import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e8y8zzbow.css';
import '../../css/h/hk_nrsbhh.css';
import '../../css/j/jm69sq_5e.css';
import '../../css/p/pko_q3yjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="e8y8zzbow"/><path class="hk_nrsbhh"/><path class="jm69sq_5e"/><path class="pko_q3yjd"/></g>`,
		"fallback": "tdesign:city-1",
	});
}

export default Component;

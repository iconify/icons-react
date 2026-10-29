import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/r/rf8yh-27v.css';
import '../../css/l/llsjouo2v.css';
import '../../css/g/g_sh4b3bp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="rf8yh-27v"/><path class="llsjouo2v"/><path class="g_sh4b3bp"/></g>`,
		"fallback": "withicons:hand-sketch",
	});
}

export default Component;

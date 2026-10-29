import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/ekmmp9bch.css';
import '../../css/r/rwe_4gjuh.css';
import '../../css/j/j06sm_bes.css';
import '../../css/q/q-71ghqrx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="ekmmp9bch wm-k"/><path class="rwe_4gjuh wm-a"/><path class="j06sm_bes wm-k"/><path class="q-71ghqrx wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban-sketch",
	});
}

export default Component;

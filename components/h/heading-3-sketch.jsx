import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/m/mwmmp3ikq.css';
import '../../css/e/eich63bwd.css';
import '../../css/z/z0kj2dbmd.css';
import '../../css/p/p19jodbej.css';
import '../../css/e/eymwfsswu.css';
import '../../css/v/vrr90_wrn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="mwmmp3ikq wm-k"/><path class="eich63bwd wm-a"/><path class="wm-s z0kj2dbmd"/><path class="p19jodbej wm-k"/><path class="eymwfsswu wm-a"/><path class="vrr90_wrn wm-s"/></g>`,
		"fallback": "withicons:heading-3-sketch",
	});
}

export default Component;

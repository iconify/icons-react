import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/u/uzms2zbds.css';
import '../../css/s/swmyrlbhw.css';
import '../../css/e/ek7r2gmod.css';
import '../../css/i/ifw3mkwyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="uzms2zbds wm-k"/><path class="swmyrlbhw wm-a"/><path class="ek7r2gmod wm-k"/><path class="ifw3mkwyi wm-a"/></g>`,
		"fallback": "withicons:indent-increase-sketch",
	});
}

export default Component;

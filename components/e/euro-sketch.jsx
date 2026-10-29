import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/w/w4cznxjwh.css';
import '../../css/i/irbpncu7y.css';
import '../../css/b/be5nhjdal.css';
import '../../css/p/pcqn0-bgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="w4cznxjwh wm-k"/><path class="irbpncu7y wm-a"/><path class="be5nhjdal wm-k"/><path class="pcqn0-bgs wm-a"/></g>`,
		"fallback": "withicons:euro-sketch",
	});
}

export default Component;

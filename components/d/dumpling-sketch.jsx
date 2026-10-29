import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/e/eh36e2b7w.css';
import '../../css/p/p3fp7ob2a.css';
import '../../css/q/qz6uo5ozb.css';
import '../../css/t/trosep5nc.css';
import '../../css/l/lxqvghd5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="eh36e2b7w wm-k"/><path class="p3fp7ob2a wm-k"/><path class="qz6uo5ozb wm-a"/><path class="trosep5nc wm-a"/><path class="lxqvghd5w"/></g>`,
		"fallback": "withicons:dumpling-sketch",
	});
}

export default Component;

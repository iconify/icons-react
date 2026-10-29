import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/l/lssi5abca.css';
import '../../css/m/m28utr75s.css';
import '../../css/e/evyvslb3y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="lssi5abca wm-a"/><path class="m28utr75s wm-k"/><path class="evyvslb3y wm-a"/></g>`,
		"fallback": "withicons:arrow-left-right-sketch",
	});
}

export default Component;

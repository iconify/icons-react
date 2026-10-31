import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/e/ejm96bl1h.css';
import '../../css/w/wsrzaabhq.css';
import '../../css/p/p29e1xbki.css';
import '../../css/u/u70kx0bzf.css';
import '../../css/l/lqc4r9b4h.css';
import '../../css/a/afo52ufcp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="ejm96bl1h wm-shadow"/><path class="wsrzaabhq"/><path class="p29e1xbki"/><path class="u70kx0bzf"/><path class="lqc4r9b4h"/><path class="afo52ufcp"/></g>`,
		"fallback": "withicons-retro:file-input",
	});
}

export default Component;

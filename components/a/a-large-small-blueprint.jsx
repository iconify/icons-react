import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/h5oye5b4h.css';
import '../../css/m/mnfeitrok.css';
import '../../css/m/mgw-d-ien.css';
import '../../css/s/spcrj-78i.css';
import '../../css/e/efmjw0brb.css';
import '../../css/p/p2_261bcc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="h5oye5b4h wm-deco"/><path class="mnfeitrok wm-deco"/><path class="mgw-d-ien wm-k"/><path class="spcrj-78i wm-a"/><path class="efmjw0brb wm-k"/><path class="p2_261bcc wm-a"/></g>`,
		"fallback": "withicons:a-large-small-blueprint",
	});
}

export default Component;

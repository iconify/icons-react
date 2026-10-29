import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l4zmzkh2z.css';
import '../../css/r/rfii-0k4v.css';
import '../../css/g/gdh659iej.css';
import '../../css/p/pz7_a8apx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l4zmzkh2z wm-deco"/><circle class="rfii-0k4v wm-k"/><circle class="gdh659iej wm-a"/><path class="pz7_a8apx wm-k"/></g>`,
		"fallback": "withicons:award-blueprint",
	});
}

export default Component;

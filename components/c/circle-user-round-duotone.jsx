import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/cal32lbgc.css';
import '../../css/r/rgggbcbui.css';
import '../../css/g/g4vvtk_cw.css';
import '../../css/j/j-6jq5b4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="cal32lbgc"/><path class="rgggbcbui"/><path class="g4vvtk_cw"/><path clip-rule="evenodd" class="j-6jq5b4o"/></g>`,
		"fallback": "lucide-extended:circle-user-round-duotone",
	});
}

export default Component;

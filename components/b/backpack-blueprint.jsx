import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/dyro-s9kb.css';
import '../../css/m/mw1w22btj.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/p/p3rqpjb7l.css';
import '../../css/r/r84p9ezvo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="dyro-s9kb wm-deco"/><path class="mw1w22btj wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="p3rqpjb7l wm-k"/><path class="r84p9ezvo wm-a"/></g>`,
		"fallback": "withicons:backpack-blueprint",
	});
}

export default Component;

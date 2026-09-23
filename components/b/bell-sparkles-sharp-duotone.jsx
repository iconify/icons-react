import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/f/f769viv2h.css';
import '../../css/c/c6upwkbge.css';
import '../../css/o/ootzhpboc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="f769viv2h"/><path class="c6upwkbge"/><path class="ootzhpboc"/></g>`,
		"fallback": "keyline-icons:bell-sparkles-sharp-duotone",
	});
}

export default Component;

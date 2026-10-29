import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/vzkm232hd.css';
import '../../css/s/s9ip9ibiv.css';
import '../../css/g/g25ktr9iv.css';
import '../../css/t/tkxcykbul.css';
import '../../css/r/rvvxdgw4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="vzkm232hd wm-deco"/><path class="s9ip9ibiv wm-deco"/><path class="g25ktr9iv wm-deco"/><path class="tkxcykbul wm-k"/><path class="rvvxdgw4h wm-a"/></g>`,
		"fallback": "withicons:face-mask-blueprint",
	});
}

export default Component;

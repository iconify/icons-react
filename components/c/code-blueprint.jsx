import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zwwoaxgmi.css';
import '../../css/l/l00otmbzz.css';
import '../../css/g/ga3g46r6u.css';
import '../../css/o/ox1659zvl.css';
import '../../css/r/rr-c8ubba.css';
import '../../css/g/gbc_g4h9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zwwoaxgmi"/><path class="l00otmbzz wm-deco"/><path class="ga3g46r6u wm-k"/><path class="ox1659zvl wm-a"/><path class="rr-c8ubba wm-k"/><path class="gbc_g4h9r wm-a"/></g>`,
		"fallback": "withicons:code-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rlc3m-bio.css';
import '../../css/o/o9pf2d00t.css';
import '../../css/h/h1xtgdc1r.css';
import '../../css/k/k9zy2hadm.css';
import '../../css/i/iwg8_v33c.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rlc3m-bio wm-deco"/><path class="o9pf2d00t wm-deco"/><path class="h1xtgdc1r wm-deco"/><path class="k9zy2hadm wm-k"/><path class="iwg8_v33c wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-woman-braids-blueprint",
	});
}

export default Component;

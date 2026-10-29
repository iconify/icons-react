import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/q/q2ox3ufos.css';
import '../../css/v/vu5vvzbot.css';
import '../../css/r/rac9nojis.css';
import '../../css/b/b41kq8bcy.css';
import '../../css/b/bvafbazrq.css';
import '../../css/k/kmq8gib2f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="q2ox3ufos wm-deco"/><path class="vu5vvzbot wm-deco"/><path class="rac9nojis wm-k"/><path class="b41kq8bcy wm-a"/><path class="bvafbazrq wm-k"/><path class="kmq8gib2f wm-a"/></g>`,
		"fallback": "withicons:check-check-blueprint",
	});
}

export default Component;

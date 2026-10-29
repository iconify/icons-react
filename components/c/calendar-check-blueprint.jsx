import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zbwom4blx.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/johjr7vlq.css';
import '../../css/a/a5cby0b9e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zbwom4blx"/><path class="cf3uzcrzx wm-deco"/><path class="johjr7vlq wm-k"/><path class="a5cby0b9e wm-a"/></g>`,
		"fallback": "withicons:calendar-check-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/t/t4nsymo_o.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/johjr7vlq.css';
import '../../css/q/qrwf4wb7h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="t4nsymo_o wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="johjr7vlq wm-k"/><path class="qrwf4wb7h wm-a"/></g>`,
		"fallback": "withicons:calendar-days-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xm7bnebsh.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/johjr7vlq.css';
import '../../css/b/b091wry5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xm7bnebsh"/><path class="cf3uzcrzx wm-deco"/><path class="johjr7vlq wm-k"/><path class="b091wry5w wm-a"/></g>`,
		"fallback": "withicons:calendar-plus-blueprint",
	});
}

export default Component;

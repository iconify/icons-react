import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/lzik7ibny.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/j/johjr7vlq.css';
import '../../css/x/xxfl8ubmw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="lzik7ibny wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="johjr7vlq wm-k"/><path class="wm-a xxfl8ubmw"/></g>`,
		"fallback": "withicons:calendar-heart-blueprint",
	});
}

export default Component;

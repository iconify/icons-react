import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/h/hz3ioibip.css';
import '../../css/e/eb2qabupy.css';
import '../../css/v/v9kcjcblo.css';
import '../../css/q/qgxdpvvoh.css';
import '../../css/i/iva3jddmj.css';
import '../../css/j/ja2t0pb3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="hz3ioibip wm-deco"/><path class="eb2qabupy wm-deco"/><path class="v9kcjcblo wm-k"/><path class="qgxdpvvoh wm-a"/><path class="iva3jddmj wm-k"/><path class="ja2t0pb3z wm-a"/></g>`,
		"fallback": "withicons:corner-down-right-blueprint",
	});
}

export default Component;

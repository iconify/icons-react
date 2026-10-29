import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/y/yhsiugbih.css';
import '../../css/k/k40-xdbak.css';
import '../../css/a/a7x_knbvb.css';
import '../../css/m/mluzlacjd.css';
import '../../css/v/v3nipsb5s.css';
import '../../css/x/xi3fmj3ll.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco yhsiugbih"/><path class="k40-xdbak wm-deco"/><path class="a7x_knbvb wm-deco"/><path class="mluzlacjd wm-k"/><path class="v3nipsb5s wm-a"/><path class="wm-k xi3fmj3ll"/></g>`,
		"fallback": "withicons:gauge-blueprint",
	});
}

export default Component;

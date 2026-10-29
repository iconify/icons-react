import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/p7j7cdc4f.css';
import '../../css/v/vvveqibqu.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/t/t8w_4b5ze.css';
import '../../css/s/sdrqekb8s.css';
import '../../css/x/x_gpurblw.css';
import '../../css/a/az4e0mb8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="p7j7cdc4f wm-deco"/><path class="vvveqibqu wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="t8w_4b5ze wm-k"/><path class="sdrqekb8s wm-a"/><path class="wm-k x_gpurblw"/><path class="az4e0mb8y wm-a"/></g>`,
		"fallback": "withicons:chart-pie-blueprint",
	});
}

export default Component;

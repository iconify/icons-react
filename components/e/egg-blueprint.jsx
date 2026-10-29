import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/eoyw7hy5h.css';
import '../../css/a/a92mxccrf.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/o/o31m35bod.css';
import '../../css/t/t_iyb2b1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="eoyw7hy5h wm-deco"/><path class="a92mxccrf wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="o31m35bod wm-k"/><path class="t_iyb2b1h wm-a"/></g>`,
		"fallback": "withicons:egg-blueprint",
	});
}

export default Component;

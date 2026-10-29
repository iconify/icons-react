import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/l/l3jgcybau.css';
import '../../css/n/nbj7ro57z.css';
import '../../css/k/kjq20lbyg.css';
import '../../css/h/h2our83dc.css';
import '../../css/x/xdwdw1wlj.css';
import '../../css/s/snig7ubjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="l3jgcybau wm-deco"/><path class="nbj7ro57z wm-deco"/><path class="kjq20lbyg wm-k"/><path class="h2our83dc wm-a"/><path class="wm-k xdwdw1wlj"/><path class="snig7ubjb wm-a"/></g>`,
		"fallback": "withicons:arrow-down-to-line-blueprint",
	});
}

export default Component;

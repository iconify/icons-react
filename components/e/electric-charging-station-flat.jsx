import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o1w_6ubbd.css';
import '../../css/x/xfb6oedjp.css';
import '../../css/l/llmlwbhzi.css';
import '../../css/b/b_nrglbfu.css';
import '../../css/y/y7_77ibhy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o1w_6ubbd"/><path class="xfb6oedjp"/><path class="llmlwbhzi"/><path clip-rule="evenodd" class="b_nrglbfu"/><path class="y7_77ibhy"/></g>`,
		"fallback": "streamline-plump-color:electric-charging-station-flat",
	});
}

export default Component;

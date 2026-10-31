import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fwx-c_0pd.css';
import '../../css/f/fyahubr1s.css';
import '../../css/r/rt9v9sb0t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="fwx-c_0pd wm-k"/><path class="fyahubr1s wm-shine"/><path class="rt9v9sb0t wm-shine"/></g>`,
		"fallback": "withicons-lunar:folder-lock",
	});
}

export default Component;

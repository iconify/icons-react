import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/p85b4paxg.css';
import '../../css/e/e_ww7zbdk.css';
import '../../css/l/l4kaw_b9b.css';
import '../../css/e/em810rbwa.css';
import '../../css/e/eh-v3ebld.css';
import '../../css/j/j2wc_ujmx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="p85b4paxg"/><path class="e_ww7zbdk"/><path class="l4kaw_b9b"/><path class="em810rbwa"/><path class="eh-v3ebld"/><path class="j2wc_ujmx"/></g>`,
		"fallback": "solar:file-zip-bold-duotone",
	});
}

export default Component;

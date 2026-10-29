import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/a/aott4gbey.css';
import '../../css/q/qc9l8cbpm.css';
import '../../css/w/wmd_hta0n.css';
import '../../css/p/psuc-s3be.css';
import '../../css/w/wlb0b7siw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="aott4gbey wm-deco"/><path class="qc9l8cbpm wm-deco"/><path class="wm-deco wmd_hta0n"/><path class="psuc-s3be wm-k"/><path class="wlb0b7siw wm-a"/></g>`,
		"fallback": "withicons:crayon-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/e/e18j-rbjv.css';
import '../../css/p/pwb0grfew.css';
import '../../css/i/iqlqlwbdl.css';
import '../../css/q/qrafe3brc.css';
import '../../css/k/k373libla.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="e18j-rbjv"/><path class="pwb0grfew"/><path class="iqlqlwbdl"/><path class="qrafe3brc"/><path class="k373libla"/></g>`,
		"fallback": "solar:file-code-bold-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o31ue_bnk.css';
import '../../css/x/xo92ezbpx.css';
import '../../css/p/p9ft05bsh.css';
import '../../css/j/jksjufbtm.css';
import '../../css/u/u7l_q6bhh.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="o31ue_bnk wm-k"/><path class="wm-shine xo92ezbpx"/><path class="p9ft05bsh wm-shine"/><path class="jksjufbtm wm-shine"/><path class="u7l_q6bhh wm-shine"/></g>`,
		"fallback": "withicons-lunar:file-spreadsheet",
	});
}

export default Component;

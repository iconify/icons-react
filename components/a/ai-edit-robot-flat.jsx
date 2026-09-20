import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/b_0ddr9ou.css';
import '../../css/i/ihpflcc3e.css';
import '../../css/d/dgv9thbiw.css';
import '../../css/r/rn733rm6p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="b_0ddr9ou"/><path clip-rule="evenodd" class="ihpflcc3e"/><path class="dgv9thbiw"/><path clip-rule="evenodd" class="rn733rm6p"/></g>`,
		"fallback": "streamline-plump-color:ai-edit-robot-flat",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/i/i46krnb5l.css';
import '../../css/h/h2i29krsh.css';
import '../../css/h/hcaie_vox.css';
import '../../css/m/mce9chbnc.css';
import '../../css/w/w49ngccqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="i46krnb5l"/><path class="h2i29krsh wm-shine"/><path class="hcaie_vox wm-k"/><path class="mce9chbnc wm-a"/><path class="w49ngccqq wm-deco"/></g>`,
		"fallback": "withicons-kawaii:hard-hat",
	});
}

export default Component;

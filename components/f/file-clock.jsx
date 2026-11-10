import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x1to1ac8k.css';
import '../../css/n/nvsv-84yu.css';
import '../../css/k/khluz147i.css';
import '../../css/s/s0cesnbdd.css';
import '../../css/t/tdvegccui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="x1to1ac8k"/><path class="nvsv-84yu"/><path class="khluz147i"/><circle class="s0cesnbdd"/><path class="tdvegccui"/></g>`,
		"fallback": "andrsrxn:file-clock",
	});
}

export default Component;

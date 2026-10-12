import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/naokjveoj.css';
import '../../css/e/e8ee_f51v.css';
import '../../css/k/khluz147i.css';
import '../../css/s/s0cesnbdd.css';
import '../../css/i/iu66apb2m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="naokjveoj"/><path class="e8ee_f51v"/><path class="khluz147i"/><circle class="s0cesnbdd"/><path class="iu66apb2m"/></g>`,
		"fallback": "andrsrxn:file-clock",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oyiiq0ywa.css';
import '../../css/l/liz1nibca.css';
import '../../css/e/evqt8dbmt.css';
import '../../css/i/ix3zvobgf.css';
import '../../css/r/rat30jy_g.css';
import '../../css/z/z5f78wyyi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oyiiq0ywa wm-k"/><path class="liz1nibca wm-k"/><path class="evqt8dbmt wm-k"/><path class="ix3zvobgf wm-k"/><path class="rat30jy_g wm-shine"/><path class="wm-a z5f78wyyi"/></g>`,
		"fallback": "withicons-anime:file-chart",
	});
}

export default Component;

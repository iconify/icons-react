import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/e8ec07r2b.css';
import '../../css/n/njy_73bsg.css';
import '../../css/h/h249wti1f.css';
import '../../css/p/pc9z48big.css';
import '../../css/w/wabd8kb8q.css';
import '../../css/a/agqy1j0-t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="e8ec07r2b wm-deco"/><path class="njy_73bsg wm-deco"/><path class="h249wti1f wm-deco"/><path class="pc9z48big wm-k"/><path class="wabd8kb8q wm-a"/><path class="agqy1j0-t wm-k"/></g>`,
		"fallback": "withicons:citrus-blueprint",
	});
}

export default Component;

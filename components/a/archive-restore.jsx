import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/m/mwputlbfe.css';
import '../../css/d/d2b4ewwfd.css';
import '../../css/i/ixjr9rmdy.css';
import '../../css/q/qxtabzb_d.css';
import '../../css/o/o7ncecc3z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="mwputlbfe wm-shadow"/><path class="d2b4ewwfd"/><path class="ixjr9rmdy"/><path class="qxtabzb_d"/><path class="o7ncecc3z"/></g>`,
		"fallback": "withicons-retro:archive-restore",
	});
}

export default Component;

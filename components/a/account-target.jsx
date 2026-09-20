import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wnfre2bdp.css';
import '../../css/q/qhfx7zb6b.css';
import '../../css/l/lsuh84bzk.css';
import '../../css/s/s32fpibek.css';
import '../../css/p/pbiie4qwn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wnfre2bdp"/><path class="qhfx7zb6b"/><path class="lsuh84bzk"/><path class="s32fpibek"/><path class="pbiie4qwn"/></g>`,
		"fallback": "streamline-cyber-color:account-target",
	});
}

export default Component;

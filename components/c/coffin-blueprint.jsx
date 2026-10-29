import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bejnddcob.css';
import '../../css/i/i05_0zb4f.css';
import '../../css/n/nip8kwy2i.css';
import '../../css/g/gi61awbnh.css';
import '../../css/t/t2zlwccha.css';
import '../../css/x/xad_znphc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bejnddcob wm-deco"/><path class="i05_0zb4f wm-deco"/><path class="nip8kwy2i wm-deco"/><path class="gi61awbnh wm-k"/><path class="t2zlwccha wm-a"/><path class="wm-k xad_znphc"/></g>`,
		"fallback": "withicons:coffin-blueprint",
	});
}

export default Component;

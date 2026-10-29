import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/x/xgs5qmsva.css';
import '../../css/p/pi3vmikgv.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/i/idszzqb-s.css';
import '../../css/r/rywcbdczz.css';
import '../../css/v/vko3vboug.css';
import '../../css/o/ot6tgob5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco xgs5qmsva"/><path class="pi3vmikgv wm-deco"/><path class="o7-ag87sb wm-deco"/><path class="idszzqb-s wm-k"/><path class="rywcbdczz wm-a"/><path class="vko3vboug wm-k"/><path class="ot6tgob5b wm-a"/></g>`,
		"fallback": "withicons:file-input-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k3_6pfbuf.css';
import '../../css/b/b4720erhn.css';
import '../../css/g/gyj-lmb2f.css';
import '../../css/r/rasux0b5a.css';
import '../../css/k/k88vflffm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k3_6pfbuf wm-deco"/><path class="b4720erhn wm-deco"/><path class="gyj-lmb2f wm-k"/><path class="rasux0b5a wm-a"/><path class="k88vflffm wm-k"/></g>`,
		"fallback": "withicons:dollar-sign-blueprint",
	});
}

export default Component;

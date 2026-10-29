import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/b/bjfti3byt.css';
import '../../css/o/owpfkmbbh.css';
import '../../css/c/c_3ekpbck.css';
import '../../css/f/f9zp6cc1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcA8bMeXC" x1="5.1" x2="18.9" y1="11.1" y2="18.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGedwipbvC" x1="4.9" x2="19.1" y1="4.9" y2="13.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="bjfti3byt wm-a"/><path fill="url(#SVGcA8bMeXC)" class="owpfkmbbh wm-a"/><path class="c_3ekpbck wm-k"/><path fill="url(#SVGedwipbvC)" class="f9zp6cc1h wm-k"/></g>`,
		"fallback": "withicons-suite:chevrons-up",
	});
}

export default Component;

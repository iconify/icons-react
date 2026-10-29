import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/p/pnjr8_b7e.css';
import '../../css/s/stui2mbih.css';
import '../../css/v/vkghwac4g.css';
import '../../css/a/a937s988w.css';
import '../../css/b/bs0jb5wdr.css';
import '../../css/v/vvrgkx3qe.css';
import '../../css/p/pr3m7exhk.css';
import '../../css/t/t76s4mbsq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><defs><linearGradient id="SVGcYdPnzJk" x1="11.1" x2="20.6" y1="2.1" y2="21.9" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient><linearGradient id="SVGrDnAQe9i" x1="2.9" x2="11.2" y1="5.9" y2="18.1" gradientUnits="userSpaceOnUse"><stop offset="0" class="pnjr8_b7e"/><stop offset=".5" class="stui2mbih"/><stop offset=".5" class="vkghwac4g"/><stop offset="1" class="a937s988w"/></linearGradient></defs><path class="bs0jb5wdr wm-a"/><path fill="url(#SVGcYdPnzJk)" class="vvrgkx3qe wm-a"/><path class="pr3m7exhk wm-k"/><path fill="url(#SVGrDnAQe9i)" class="t76s4mbsq wm-k"/></g>`,
		"fallback": "withicons-suite:contactless",
	});
}

export default Component;

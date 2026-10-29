import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/du4jephjb.css';
import '../../css/h/huiagch2m.css';
import '../../css/m/mhdr543mh.css';
import '../../css/j/j5vo-kb2w.css';
import '../../css/l/l2miw0nqo.css';
import '../../css/z/zn5uwcbwy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="du4jephjb wm-deco"/><path class="huiagch2m wm-deco"/><path class="mhdr543mh wm-deco"/><path class="j5vo-kb2w wm-k"/><path class="l2miw0nqo wm-a"/><path class="wm-k zn5uwcbwy"/></g>`,
		"fallback": "withicons:graduation-cap-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/bmz6v8bmy.css';
import '../../css/v/vze4wuf6n.css';
import '../../css/n/nsik7n9oa.css';
import '../../css/f/fswuyh-rm.css';
import '../../css/v/v3uzkxb0u.css';
import '../../css/r/r_u7cjb8i.css';
import '../../css/d/d6b7dubbd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="bmz6v8bmy wm-deco"/><path class="vze4wuf6n wm-deco"/><path class="nsik7n9oa wm-k"/><path class="fswuyh-rm wm-a"/><path class="v3uzkxb0u wm-s"/><path class="r_u7cjb8i wm-k"/><path class="d6b7dubbd wm-s"/></g>`,
		"fallback": "withicons:image-off-blueprint",
	});
}

export default Component;

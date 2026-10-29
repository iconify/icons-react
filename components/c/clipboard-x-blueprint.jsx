import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/oh5hb_8_m.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/m/mzsw-jb7t.css';
import '../../css/j/j3-d8vb4o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="oh5hb_8_m wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="mzsw-jb7t wm-k"/><path class="j3-d8vb4o wm-a"/></g>`,
		"fallback": "withicons:clipboard-x-blueprint",
	});
}

export default Component;

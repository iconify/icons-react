import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/o/o1tbf4b1t.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/m/mzsw-jb7t.css';
import '../../css/b/butdm2b7m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="o1tbf4b1t wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="mzsw-jb7t wm-k"/><path class="butdm2b7m wm-a"/></g>`,
		"fallback": "withicons:clipboard-check-blueprint",
	});
}

export default Component;

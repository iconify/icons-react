import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/j/jpkt-ghuv.css';
import '../../css/a/ayhs6pbko.css';
import '../../css/d/di4vrk5dl.css';
import '../../css/q/q0z4nob4z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="jpkt-ghuv wm-deco"/><path class="ayhs6pbko wm-deco"/><path class="di4vrk5dl wm-k"/><path class="q0z4nob4z wm-a"/></g>`,
		"fallback": "withicons:bus-blueprint",
	});
}

export default Component;

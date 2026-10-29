import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/e/ekybxd9od.css';
import '../../css/b/b-q54fbrr.css';
import '../../css/z/z8zq0dbco.css';
import '../../css/k/kqp1rrbac.css';
import '../../css/k/kfn5s-bjs.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ekybxd9od wm-deco"/><path class="b-q54fbrr wm-deco"/><path class="wm-deco z8zq0dbco"/><path class="kqp1rrbac wm-k"/><path class="kfn5s-bjs wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-man-cap-blueprint",
	});
}

export default Component;

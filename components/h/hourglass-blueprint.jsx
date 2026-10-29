import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/u/u-1mpi1_y.css';
import '../../css/b/bo8ys6w-i.css';
import '../../css/s/sdaucgb_l.css';
import '../../css/a/aux2szb6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="u-1mpi1_y wm-deco"/><path class="bo8ys6w-i wm-deco"/><path class="sdaucgb_l wm-deco"/><path class="aux2szb6h"/></g>`,
		"fallback": "withicons:hourglass-blueprint",
	});
}

export default Component;

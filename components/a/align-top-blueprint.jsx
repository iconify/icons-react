import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/k/k45-5tb6z.css';
import '../../css/y/yu5a5mbcn.css';
import '../../css/o/o7-ag87sb.css';
import '../../css/j/j8utzmbct.css';
import '../../css/z/zgn60bcqv.css';
import '../../css/g/gyuc8f-5s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="k45-5tb6z wm-deco"/><path class="wm-deco yu5a5mbcn"/><path class="o7-ag87sb wm-deco"/><path class="j8utzmbct wm-k"/><path class="wm-a zgn60bcqv"/><path class="gyuc8f-5s wm-k"/></g>`,
		"fallback": "withicons:align-top-blueprint",
	});
}

export default Component;

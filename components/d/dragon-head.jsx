import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/t/ttjf70i0h.css';
import '../../css/m/mzksfebbp.css';
import '../../css/c/cuoosoeax.css';
import '../../css/v/v--gfobro.css';
import '../../css/z/z4pqw4bkp.css';
import '../../css/m/mhs3orbun.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ttjf70i0h"/><path class="mzksfebbp wm-a"/><path class="cuoosoeax wm-a"/><path class="v--gfobro wm-a"/><path class="wm-s z4pqw4bkp"/><path class="mhs3orbun"/></g>`,
		"fallback": "withicons:dragon-head",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/z/zwwoaxgmi.css';
import '../../css/l/l00otmbzz.css';
import '../../css/h/h1vixoucg.css';
import '../../css/c/c0l91kssj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="wm-deco zwwoaxgmi"/><path class="l00otmbzz wm-deco"/><path class="h1vixoucg"/><path class="c0l91kssj"/></g>`,
		"fallback": "withicons:activity-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p5ebr9bjc.css';
import '../../css/u/ufscmvy2b.css';
import '../../css/v/vslp_-0hv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p5ebr9bjc"/><path class="ufscmvy2b"/><path class="vslp_-0hv"/>`,
		"fallback": "energy-icons:hydrogen-refuelling-48",
	});
}

export default Component;

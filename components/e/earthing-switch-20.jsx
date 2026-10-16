import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l_mmmi5cu.css';
import '../../css/f/f-7xlbb5g.css';
import '../../css/q/qphgw4bpl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l_mmmi5cu"/><path class="f-7xlbb5g"/><path class="qphgw4bpl"/>`,
		"fallback": "energy-icons:earthing-switch-20",
	});
}

export default Component;

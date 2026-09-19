import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/c/czm5fswmg.css';
import '../../css/m/m68tdac3l.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><circle class="czm5fswmg"/><path class="m68tdac3l"/></g>`,
		"fallback": "cryptocurrency-color:avax",
	});
}

export default Component;

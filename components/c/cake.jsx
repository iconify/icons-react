import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to0c2ub7t.css';
import '../../css/l/lj5mv4-ax.css';
import '../../css/x/x4c5zgb8o.css';
import '../../css/a/adnqnybwg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to0c2ub7t"><path class="lj5mv4-ax"/><path class="x4c5zgb8o"/><path class="adnqnybwg"/></g>`,
		"fallback": "akar-icons:cake",
	});
}

export default Component;

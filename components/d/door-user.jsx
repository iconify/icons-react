import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k35_t20li.css';
import '../../css/l/lje_f2bjg.css';
import '../../css/h/hvqqtvb8h.css';
import '../../css/t/tvr9q5e1m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k35_t20li"/><path class="lje_f2bjg"/><path class="hvqqtvb8h"/><path class="tvr9q5e1m"/></g>`,
		"fallback": "andrsrxn:door-user",
	});
}

export default Component;

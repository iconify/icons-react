import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/srv0tukcb.css';
import '../../css/h/h31327nfn.css';
import '../../css/j/jtlouza2l.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="srv0tukcb"/><path class="h31327nfn"/><path class="jtlouza2l"/></g>`,
		"fallback": "streamline-color:braces-circle",
	});
}

export default Component;

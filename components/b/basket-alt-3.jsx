import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/oq0959nra.css';
import '../../css/u/ux5g1npfd.css';
import '../../css/b/b9xassrrs.css';
import '../../css/p/p7g88_b9s.css';
import '../../css/v/vh1dgbcue.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="oq0959nra"/><path class="ux5g1npfd"/><path class="b9xassrrs"/><circle class="p7g88_b9s"/><circle class="vh1dgbcue"/></g>`,
		"fallback": "lets-icons:basket-alt-3",
	});
}

export default Component;

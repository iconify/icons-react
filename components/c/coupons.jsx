import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a6ofc9bka.css';
import '../../css/q/qe_4tqbgt.css';
import '../../css/r/re8yzr9al.css';
import '../../css/p/p0mvyubwm.css';
import '../../css/j/jbvae9wjs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a6ofc9bka"/><path class="qe_4tqbgt"/><path class="re8yzr9al"/><path class="p0mvyubwm"/><path class="jbvae9wjs"/></g>`,
		"fallback": "streamline-kameleon-color:coupons",
	});
}

export default Component;

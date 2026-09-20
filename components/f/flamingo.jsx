import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bxg94rb_l.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/t/t9rd3ac0o.css';
import '../../css/u/ujpkbubht.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bxg94rb_l"/><g class="ij2x_72vy"><path class="t9rd3ac0o"/><path class="ujpkbubht"/></g>`,
		"fallback": "openmoji:flamingo",
	});
}

export default Component;

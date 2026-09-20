import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/gwnx6_byv.css';
import '../../css/p/phg74re_f.css';
import '../../css/g/g6ys_sbcg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="gwnx6_byv"/><path class="phg74re_f"/><path class="g6ys_sbcg"/></g>`,
		"fallback": "mage:box-3d-scan",
	});
}

export default Component;

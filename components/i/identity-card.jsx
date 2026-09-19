import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/xazew2bwr.css';
import '../../css/o/o-l3bp_4y.css';
import '../../css/k/k6t-lxbar.css';
import '../../css/a/a1om0n7hg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="xazew2bwr"/><path class="o-l3bp_4y"/><path class="k6t-lxbar"/><path class="a1om0n7hg"/></g>`,
		"fallback": "hugeicons:identity-card",
	});
}

export default Component;

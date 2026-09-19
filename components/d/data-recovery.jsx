import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/v/v7x7hozxq.css';
import '../../css/k/k5ala-n1a.css';
import '../../css/m/mwz9-fkga.css';
import '../../css/c/cjunxnb8y.css';
import '../../css/u/uu22-2bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="v7x7hozxq"/><path class="k5ala-n1a"/><ellipse class="mwz9-fkga"/><path class="cjunxnb8y"/><path class="uu22-2bqc"/></g>`,
		"fallback": "hugeicons:data-recovery",
	});
}

export default Component;

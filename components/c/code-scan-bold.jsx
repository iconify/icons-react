import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/u/u_3psfbjy.css';
import '../../css/v/vtko2zsbn.css';
import '../../css/v/v74w5wbyh.css';
import '../../css/b/bbt2j9byd.css';
import '../../css/o/oc64p8blr.css';
import '../../css/n/nmke13z2i.css';
import '../../css/m/mrbd1vqmu.css';
import '../../css/l/l-i-4twyo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="u_3psfbjy"/><path class="vtko2zsbn"/><path class="v74w5wbyh"/><path class="bbt2j9byd"/><path class="oc64p8blr"/><path class="nmke13z2i"/><path class="mrbd1vqmu"/><path class="l-i-4twyo"/></g>`,
		"fallback": "solar:code-scan-bold",
	});
}

export default Component;

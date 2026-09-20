import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/j/jb-grt_jm.css';
import '../../css/o/o8joigbba.css';
import '../../css/o/o3uru2bok.css';
import '../../css/t/tt2xjccpu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="jb-grt_jm"/><path class="o8joigbba"/><path class="o3uru2bok"/><path class="tt2xjccpu"/></g>`,
		"fallback": "streamline-freehand-color:crypto-currency-bitcoin-chip",
	});
}

export default Component;

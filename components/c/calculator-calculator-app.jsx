import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/t/tq557m70x.css';
import '../../css/p/ptbcjcfqf.css';
import '../../css/c/cvihrobuv.css';
import '../../css/s/s8efgpcwd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="tq557m70x"/><path class="ptbcjcfqf"/><path class="cvihrobuv"/><path class="s8efgpcwd"/></g>`,
		"fallback": "streamline-freehand-color:calculator-calculator-app",
	});
}

export default Component;

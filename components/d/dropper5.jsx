import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/o/o_pr89wos.css';
import '../../css/q/q_4wznbtz.css';
import '../../css/q/qgo8ugbdd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="o_pr89wos"/><path clip-rule="evenodd" class="q_4wznbtz"/><path clip-rule="evenodd" class="qgo8ugbdd"/></g>`,
		"fallback": "reicon:dropper5",
	});
}

export default Component;

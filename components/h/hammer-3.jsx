import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/i/i_3s7_bnf.css';
import '../../css/r/ryp317iba.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="i_3s7_bnf"/><path class="ryp317iba"/></g>`,
		"fallback": "streamline-cyber:hammer-3",
	});
}

export default Component;

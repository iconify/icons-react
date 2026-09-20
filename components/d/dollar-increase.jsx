import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xqbj_3bun.css';
import '../../css/f/fygbrs_6n.css';
import '../../css/n/no9c02baj.css';
import '../../css/q/q_p_hwbpm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xqbj_3bun"/><path class="fygbrs_6n"/><path class="no9c02baj"/><path class="q_p_hwbpm"/></g>`,
		"fallback": "streamline-sharp-color:dollar-increase",
	});
}

export default Component;

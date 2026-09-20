import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/x/xq1zlz_te.css';
import '../../css/o/o8u_a_bob.css';
import '../../css/e/ewe2dqbge.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="xq1zlz_te"/><path class="o8u_a_bob"/><path class="ewe2dqbge"/></g>`,
		"fallback": "streamline-sharp-color:flip-vertical-arrow-2",
	});
}

export default Component;

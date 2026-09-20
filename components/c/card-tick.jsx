import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/sgfzyvn2h.css';
import '../../css/q/q9uu0nxvf.css';
import '../../css/c/clptpvbhb.css';
import '../../css/v/v4ok709ib.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="sgfzyvn2h"/><path class="q9uu0nxvf"/><path class="clptpvbhb"/><path class="v4ok709ib"/></g>`,
		"fallback": "reicon:card-tick",
	});
}

export default Component;

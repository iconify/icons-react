import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_k-aqhyd.css';
import '../../css/e/e6kjhpb-u.css';
import '../../css/u/upo1eubpy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_k-aqhyd"/><path class="e6kjhpb-u"/><path class="upo1eubpy"/></g>`,
		"fallback": "streamline-ultimate-color:day-sunrise-2",
	});
}

export default Component;

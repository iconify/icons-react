import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/osff_aczw.css';
import '../../css/o/ofuu2_ewz.css';
import '../../css/b/brad80bsu.css';
import '../../css/t/t_t8jppjq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="osff_aczw"/><path class="ofuu2_ewz"/><path class="brad80bsu"/><path class="t_t8jppjq"/></g>`,
		"fallback": "streamline-freehand-color:currency-euro-dollar-exchange",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/o/o-pt11boq.css';
import '../../css/u/uonmanbjw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="o-pt11boq"/><path class="uonmanbjw"/></g>`,
		"fallback": "iconoir:calendar-arrow-down-solid",
	});
}

export default Component;

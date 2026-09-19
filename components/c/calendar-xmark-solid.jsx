import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sqa3tkb1n.css';
import '../../css/i/i3fv60jeg.css';
import '../../css/x/xxaa87b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="sqa3tkb1n"><path class="i3fv60jeg"/><path class="xxaa87b_a"/></g>`,
		"fallback": "iconoir:calendar-xmark-solid",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/a/a4n5f-jbq.css';
import '../../css/f/fow_0ei_p.css';
import '../../css/t/tb6yzhyny.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="a4n5f-jbq"/><path class="fow_0ei_p"/><path class="tb6yzhyny"/></g>`,
		"fallback": "andrsrxn:crown",
	});
}

export default Component;

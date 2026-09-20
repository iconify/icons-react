import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/be0ma7bmn.css';
import '../../css/k/ktzs39bmv.css';
import '../../css/x/x1wlzug7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="be0ma7bmn"/><path class="ktzs39bmv"/><path class="x1wlzug7e"/></g>`,
		"fallback": "lets-icons:date-today-duotone",
	});
}

export default Component;

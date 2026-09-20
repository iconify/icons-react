import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/e/emrjjuzor.css';
import '../../css/b/bcrcl3pcu.css';
import '../../css/o/oiemdrb8q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><circle class="emrjjuzor"/><path class="bcrcl3pcu"/><path class="oiemdrb8q"/></g>`,
		"fallback": "lets-icons:globe-light",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/ahf0ofwga.css';
import '../../css/d/dp5ljuulf.css';
import '../../css/o/oge3aw2cm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="ahf0ofwga"/><path class="dp5ljuulf"/><path class="oge3aw2cm"/></g>`,
		"fallback": "solar:airbuds-case-charge-bold-duotone",
	});
}

export default Component;

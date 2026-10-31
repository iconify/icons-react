import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i4wkw1_1c.css';
import '../../css/g/gdmhsxbhx.css';
import '../../css/q/q9vo0tbmg.css';
import '../../css/w/w7nwn5b1x.css';
import '../../css/m/mr_iwuges.css';
import '../../css/o/of6iv5b0o.css';
import '../../css/e/e_jdmwzty.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="i4wkw1_1c wm-k"/><path class="gdmhsxbhx wm-deco"/><path class="q9vo0tbmg wm-k"/><path class="w7nwn5b1x wm-k"/><path class="mr_iwuges wm-shadow"/><path class="of6iv5b0o wm-shine"/><path class="e_jdmwzty wm-shine"/></g>`,
		"fallback": "withicons-valentine:heart-pulse",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi3_wjb_c.css';
import '../../css/a/a5kse7bed.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="qi3_wjb_c"/><path class="a5kse7bed"/></g>`,
		"fallback": "tdesign:gesture-wipe-down",
	});
}

export default Component;

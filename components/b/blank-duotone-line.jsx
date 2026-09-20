import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/f9wrkjbdx.css';
import '../../css/b/bepdiosbn.css';
import '../../css/l/lrtfp_zks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="f9wrkjbdx"/><path class="bepdiosbn"/><path class="lrtfp_zks"/></g>`,
		"fallback": "lets-icons:blank-duotone-line",
	});
}

export default Component;

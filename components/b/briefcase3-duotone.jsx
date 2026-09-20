import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/r4_tdob4v.css';
import '../../css/b/btuwcu4kf.css';
import '../../css/l/lo1_5i7tr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="r4_tdob4v"/><path class="btuwcu4kf"/><path class="lo1_5i7tr"/></g>`,
		"fallback": "reicon:briefcase3-duotone",
	});
}

export default Component;

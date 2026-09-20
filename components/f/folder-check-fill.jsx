import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xw5oxouqi.css';
import '../../css/p/p4m9i4bbw.css';
import '../../css/n/n7dpi5bvl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xw5oxouqi"/><path class="p4m9i4bbw"/><path class="n7dpi5bvl"/></g>`,
		"fallback": "lets-icons:folder-check-fill",
	});
}

export default Component;

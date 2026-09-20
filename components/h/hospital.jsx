import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/eh8ep-e6w.css';
import '../../css/u/u64nxbbyb.css';
import '../../css/u/uqemucc0s.css';
import '../../css/g/ggpvcmbwf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="eh8ep-e6w"/><path class="u64nxbbyb"/><path class="uqemucc0s"/><path class="ggpvcmbwf"/></g>`,
		"fallback": "tdesign:hospital",
	});
}

export default Component;

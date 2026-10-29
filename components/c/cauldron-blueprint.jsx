import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rpjazjbdg.css';
import '../../css/t/tf5dpdmig.css';
import '../../css/x/x12kt1bnu.css';
import '../../css/u/u0r22-bxp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rpjazjbdg wm-deco"/><path class="tf5dpdmig wm-deco"/><path class="wm-deco x12kt1bnu"/><path class="u0r22-bxp"/></g>`,
		"fallback": "withicons:cauldron-blueprint",
	});
}

export default Component;

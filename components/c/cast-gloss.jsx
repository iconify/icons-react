import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/w/wfi_unbbz.css';
import '../../css/e/elilp-cfg.css';
import '../../css/a/amayjib1r.css';
import '../../css/k/kcbaaxicr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="wfi_unbbz wm-k"/><path class="elilp-cfg wm-a"/><circle class="amayjib1r wm-a"/><path class="kcbaaxicr wm-shine"/></g>`,
		"fallback": "withicons:cast-gloss",
	});
}

export default Component;

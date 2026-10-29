import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/p/pqefv2b9w.css';
import '../../css/e/e4kubqbgr.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/o/oeinx3baj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="pqefv2b9w wm-deco"/><path class="e4kubqbgr wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="oeinx3baj"/></g>`,
		"fallback": "withicons:git-fork-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/r/rbfqm4b8t.css';
import '../../css/p/phu6f7bmz.css';
import '../../css/c/cf3uzcrzx.css';
import '../../css/e/euhc06b6i.css';
import '../../css/r/r309anzoi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="rbfqm4b8t wm-deco"/><path class="phu6f7bmz wm-deco"/><path class="cf3uzcrzx wm-deco"/><path class="euhc06b6i wm-k"/><path class="r309anzoi wm-a"/></g>`,
		"fallback": "withicons:building-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/b/byb4-m0be.css';
import '../../css/p/pbcg4o0ny.css';
import '../../css/o/o1383qkea.css';
import '../../css/b/buaqtwbfz.css';
import '../../css/w/wc3o31csz.css';
import '../../css/w/wrloezbng.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="byb4-m0be wm-deco"/><path class="pbcg4o0ny wm-deco"/><path class="o1383qkea wm-k"/><path class="buaqtwbfz wm-a"/><path class="wc3o31csz wm-s"/><path class="wm-k wrloezbng"/></g>`,
		"fallback": "withicons:file-clock-blueprint",
	});
}

export default Component;

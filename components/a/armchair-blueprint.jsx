import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/v/v-bnvbjhd.css';
import '../../css/a/au-pabgjr.css';
import '../../css/n/nge5cfbll.css';
import '../../css/k/kz4hppbys.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="v-bnvbjhd wm-deco"/><path class="au-pabgjr wm-deco"/><path class="nge5cfbll wm-deco"/><path class="kz4hppbys"/></g>`,
		"fallback": "withicons:armchair-blueprint",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/v/vhrzp3m4f.css';
import '../../css/n/nakj5ubjo.css';
import '../../css/y/yriqevbyr.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="vhrzp3m4f"/><path clip-rule="evenodd" class="nakj5ubjo"/><path clip-rule="evenodd" class="yriqevbyr"/></g>`,
		"fallback": "healthicons:egg-cell",
	});
}

export default Component;

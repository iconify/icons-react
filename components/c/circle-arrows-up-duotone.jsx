import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/k/kpsf3pb4n.css';
import '../../css/u/uf7wl9bck.css';
import '../../css/n/nlq236bvw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="kpsf3pb4n"/><path class="uf7wl9bck"/><path class="nlq236bvw"/></g>`,
		"fallback": "reicon:circle-arrows-up-duotone",
	});
}

export default Component;

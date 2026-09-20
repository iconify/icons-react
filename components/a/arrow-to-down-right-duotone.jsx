import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ibawu871j.css';
import '../../css/y/ywchcobet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ibawu871j"/><path class="ywchcobet"/></g>`,
		"fallback": "reicon:arrow-to-down-right-duotone",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/a/a5mzbcchr.css';
import '../../css/c/c1g11sbqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="a5mzbcchr"/><path class="c1g11sbqq"/></g>`,
		"fallback": "reicon:home-duotone",
	});
}

export default Component;

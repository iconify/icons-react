import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/x/xomx6sf7d.css';
import '../../css/v/vj0sagsry.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="xomx6sf7d"/><path clip-rule="evenodd" class="vj0sagsry"/></g>`,
		"fallback": "at-icons:headphones-mute",
	});
}

export default Component;

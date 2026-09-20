import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/r/rxp03rbqu.css';
import '../../css/m/m47nc8glw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="rxp03rbqu"/><path class="m47nc8glw"/></g>`,
		"fallback": "reicon:circle-hashtag-filled",
	});
}

export default Component;

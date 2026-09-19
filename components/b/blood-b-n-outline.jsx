import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/i/ivgjj6_5c.css';
import '../../css/r/rxaqa1ufk.css';
import '../../css/h/h0i813b-n.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path clip-rule="evenodd" class="ivgjj6_5c"/><path class="rxaqa1ufk"/><path clip-rule="evenodd" class="h0i813b-n"/></g>`,
		"fallback": "healthicons:blood-b-n-outline",
	});
}

export default Component;

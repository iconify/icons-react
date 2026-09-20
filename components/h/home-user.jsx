import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/q/qq9ymcb2g.css';
import '../../css/a/aq19pqh_t.css';
import '../../css/f/fgetbabxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="qq9ymcb2g"/><path clip-rule="evenodd" class="aq19pqh_t"/><path clip-rule="evenodd" class="fgetbabxw"/></g>`,
		"fallback": "reicon:home-user",
	});
}

export default Component;

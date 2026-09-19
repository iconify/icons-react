import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/g/gtx8h5bep.css';
import '../../css/b/bt4ruzd5g.css';
import '../../css/u/uji1jfbhw.css';
import '../../css/u/uynpux9kt.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="gtx8h5bep"/><path clip-rule="evenodd" class="bt4ruzd5g"/><path clip-rule="evenodd" class="uji1jfbhw"/><path class="uynpux9kt"/></g>`,
		"fallback": "glyphs:car-bump-bold",
	});
}

export default Component;

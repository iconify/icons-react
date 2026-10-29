import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/c/ciu_jhtkl.css';
import '../../css/o/o4_sfzbau.css';
import '../../css/r/rbzq4bjzv.css';
import '../../css/v/vuktelb6q.css';
import '../../css/n/nqq0vzb3j.css';
import '../../css/v/vildi5bvg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="ciu_jhtkl wm-deco"/><path class="o4_sfzbau wm-deco"/><path class="rbzq4bjzv wm-deco"/><path class="vuktelb6q wm-k"/><path class="nqq0vzb3j wm-a"/><path class="vildi5bvg wm-a"/></g>`,
		"fallback": "withicons:avatar-man-turban-blueprint",
	});
}

export default Component;

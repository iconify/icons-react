import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nuc69jbme.css';
import '../../css/x/x6q1qsb4x.css';
import '../../css/f/f6l_3qegk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/d/djiglgypw.css';
import '../../css/g/g8q-87bvm.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nuc69jbme"/><circle class="x6q1qsb4x"/><path class="f6l_3qegk"/><g class="jn8qy4bru"><path class="djiglgypw"/><path class="g8q-87bvm"/></g>`,
		"fallback": "openmoji:github",
	});
}

export default Component;

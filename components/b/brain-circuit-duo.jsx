import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ef3pdbyer.css';
import '../../css/f/f2-2wdbln.css';
import '../../css/b/be9_y4xan.css';
import '../../css/j/jlp-ovbkm.css';
import '../../css/r/rsulyv1ts.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="ef3pdbyer"/><path class="f2-2wdbln wm-a"/><path class="be9_y4xan wm-a"/><path class="jlp-ovbkm"/><path class="rsulyv1ts wm-a"/></g>`,
		"fallback": "withicons:brain-circuit-duo",
	});
}

export default Component;

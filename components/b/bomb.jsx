import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/le24a6ftv.css';
import '../../css/h/hfxgwyofh.css';
import '../../css/j/jk2u74b-e.css';
import '../../css/l/l49cwhbnf.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="le24a6ftv"/><path class="hfxgwyofh"/><path class="jk2u74b-e"/><path class="l49cwhbnf"/></g>`,
		"fallback": "fluent-emoji-flat:bomb",
	});
}

export default Component;

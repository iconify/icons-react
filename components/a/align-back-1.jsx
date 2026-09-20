import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/q82-1kbpt.css';
import '../../css/a/acb48hb4h.css';
import '../../css/p/ppjwwcbbh.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="q82-1kbpt"/><path class="acb48hb4h"/><path class="ppjwwcbbh"/></g>`,
		"fallback": "streamline-color:align-back-1",
	});
}

export default Component;

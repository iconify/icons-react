import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/juhzh2bte.css';
import '../../css/o/ovu3fkbdg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="juhzh2bte"/><path class="ovu3fkbdg"/></g>`,
		"fallback": "tdesign:dam-3",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/o/o291p-a2z.css';
import '../../css/c/cd4vo0b5j.css';
import '../../css/l/lho28-27t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="o291p-a2z"/><path class="cd4vo0b5j"/><path class="lho28-27t"/></g>`,
		"fallback": "majesticons:folder-minus",
	});
}

export default Component;

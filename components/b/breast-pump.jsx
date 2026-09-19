import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/f/f90ii8o0l.css';
import '../../css/b/blcntivod.css';
import '../../css/i/if-72qbbn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="f90ii8o0l"/><circle class="blcntivod"/><path class="if-72qbbn"/></g>`,
		"fallback": "hugeicons:breast-pump",
	});
}

export default Component;

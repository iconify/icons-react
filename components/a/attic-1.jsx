import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/ut1a-vb5f.css';
import '../../css/t/t3w9i39ua.css';
import '../../css/p/plnhhokme.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ut1a-vb5f"/><path class="t3w9i39ua"/><path class="plnhhokme"/></g>`,
		"fallback": "tdesign:attic-1",
	});
}

export default Component;

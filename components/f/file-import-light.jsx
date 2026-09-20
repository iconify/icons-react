import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v91oebczy.css';
import '../../css/r/rdg5s2amp.css';
import '../../css/o/o_0ccoams.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v91oebczy"/><path class="rdg5s2amp"/><path class="o_0ccoams"/></g>`,
		"fallback": "stash:file-import-light",
	});
}

export default Component;

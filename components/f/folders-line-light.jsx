import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/t/to1igrb4k.css';
import '../../css/b/br0wb3b-q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="to1igrb4k"/><path class="br0wb3b-q"/></g>`,
		"fallback": "lets-icons:folders-line-light",
	});
}

export default Component;

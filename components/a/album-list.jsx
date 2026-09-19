import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/yn7wr7nsx.css';
import '../../css/j/jb4vyelha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="yn7wr7nsx"/><path class="jb4vyelha"/></g>`,
		"fallback": "iconoir:album-list",
	});
}

export default Component;

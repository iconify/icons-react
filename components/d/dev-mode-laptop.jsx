import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/j9gb25b9s.css';
import '../../css/n/ndzxgr5lf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="j9gb25b9s"/><path class="ndzxgr5lf"/></g>`,
		"fallback": "iconoir:dev-mode-laptop",
	});
}

export default Component;

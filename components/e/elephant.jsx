import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rv9c6hbfy.css';
import '../../css/e/eo62-tbdj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rv9c6hbfy"/><circle class="eo62-tbdj"/></g>`,
		"fallback": "icon-park-outline:elephant",
	});
}

export default Component;

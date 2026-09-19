import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/i/i8equl19z.css';
import '../../css/f/fdbt40b4q.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="i8equl19z"/><path class="fdbt40b4q"/></g>`,
		"fallback": "icon-park-outline:file-cabinet",
	});
}

export default Component;

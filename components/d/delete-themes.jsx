import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/j/jtu7ayv-p.css';
import '../../css/c/c-lptrhzz.css';
import '../../css/o/ore9ccbul.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path clip-rule="evenodd" class="jtu7ayv-p"/><path class="c-lptrhzz"/><path class="ore9ccbul"/></g>`,
		"fallback": "icon-park-outline:delete-themes",
	});
}

export default Component;

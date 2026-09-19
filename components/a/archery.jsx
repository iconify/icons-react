import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/x/x_5bsx01w.css';
import '../../css/c/clg9eiblv.css';
import '../../css/f/f47gc0bvj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="x_5bsx01w"/><circle class="clg9eiblv"/><path class="f47gc0bvj"/></g>`,
		"fallback": "icon-park-solid:archery",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/a/abk0q70qq.css';
import '../../css/z/zo9u541zc.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path clip-rule="evenodd" class="abk0q70qq"/><path class="zo9u541zc"/></g>`,
		"fallback": "icon-park:hanger",
	});
}

export default Component;

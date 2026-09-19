import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/b/b685dd70v.css';
import '../../css/h/h924rebcs.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><path class="b685dd70v"/><path class="h924rebcs"/></g>`,
		"fallback": "icon-park-outline:dragon-zodiac",
	});
}

export default Component;

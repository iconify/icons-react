import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/o/oagawgbbv.css';
import '../../css/w/wbdy8gb0y.css';
import '../../css/k/k4xam1b7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="oagawgbbv"/><path class="wbdy8gb0y"/><path class="k4xam1b7e"/></g>`,
		"fallback": "hugeicons:complaint",
	});
}

export default Component;

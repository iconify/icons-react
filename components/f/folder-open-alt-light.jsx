import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/a/aog4blbjt.css';
import '../../css/d/dx-yl882u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="aog4blbjt"/><path class="dx-yl882u"/></g>`,
		"fallback": "lets-icons:folder-open-alt-light",
	});
}

export default Component;

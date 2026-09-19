import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/e/eb3ye2byy.css';
import '../../css/b/bmei7-vkt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="eb3ye2byy"/><path class="bmei7-vkt"/></g>`,
		"fallback": "icon-park:go-end",
	});
}

export default Component;

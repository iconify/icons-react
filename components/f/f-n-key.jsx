import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vm3ivccum.css';
import '../../css/s/s8pacjbfa.css';
import '../../css/e/e24rsjd1i.css';
import '../../css/g/g180g5bxx.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="vm3ivccum"><rect class="s8pacjbfa"/><path class="e24rsjd1i"/><path class="g180g5bxx"/></g>`,
		"fallback": "icon-park-outline:f-n-key",
	});
}

export default Component;

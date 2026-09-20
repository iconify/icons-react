import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/kcyasgp0f.css';
import '../../css/u/urlxaac5m.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="kcyasgp0f"/><path class="urlxaac5m"/></g>`,
		"fallback": "streamline-plump-color:class-lesson-flat",
	});
}

export default Component;

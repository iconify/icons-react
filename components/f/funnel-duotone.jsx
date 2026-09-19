import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rgypubb4w.css';
import '../../css/a/av4zg522m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rgypubb4w"/><path class="av4zg522m"/></g>`,
		"fallback": "iconamoon:funnel-duotone",
	});
}

export default Component;

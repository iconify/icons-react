import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z0k13pbix.css';
import '../../css/v/vzvjqggfh.css';
import '../../css/a/az_ciac9b.css';
import '../../css/l/lh5zdobrs.css';
import '../../css/a/ag8wa9y2n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z0k13pbix"/><path class="vzvjqggfh"/><path class="az_ciac9b"/><path class="lh5zdobrs"/><path class="ag8wa9y2n"/></g>`,
		"fallback": "fluent-emoji-flat:bar-chart",
	});
}

export default Component;

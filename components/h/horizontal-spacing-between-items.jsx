import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/e/e5i876b3q.css';
import '../../css/q/qst3jj07t.css';
import '../../css/c/c5_4__biv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="e5i876b3q"/><path class="qst3jj07t"/><path class="c5_4__biv"/></g>`,
		"fallback": "icon-park:horizontal-spacing-between-items",
	});
}

export default Component;

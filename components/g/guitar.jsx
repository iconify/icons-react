import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yht2j6bcg.css';
import '../../css/l/ldhhj3eyq.css';
import '../../css/l/l6ne70j4c.css';
import '../../css/k/kao6npjxx.css';
import '../../css/b/b79rnk0vi.css';
import '../../css/o/oaftyq36m.css';
import '../../css/e/ehuq1ebsg.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="yht2j6bcg"/><path class="ldhhj3eyq"/><path class="l6ne70j4c"/><path class="kao6npjxx"/><path class="b79rnk0vi"/><path class="oaftyq36m"/><path class="ehuq1ebsg"/></g>`,
		"fallback": "fluent-emoji-flat:guitar",
	});
}

export default Component;

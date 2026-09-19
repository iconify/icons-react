import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/n/niw780buy.css';
import '../../css/u/uodbc-gze.css';
import '../../css/a/aqit9eb6t.css';
import '../../css/t/ttp9gubjw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><circle class="niw780buy"/><circle class="uodbc-gze"/><path class="aqit9eb6t"/><path class="ttp9gubjw"/></g>`,
		"fallback": "icon-park:editing",
	});
}

export default Component;

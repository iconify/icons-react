import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/jmj-ml67i.css';
import '../../css/l/l1d-l3bua.css';
import '../../css/a/af71ghbky.css';
import '../../css/x/xw1fztk-d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="jmj-ml67i"/><path class="l1d-l3bua"/><path class="af71ghbky"/><path class="xw1fztk-d"/></g>`,
		"fallback": "icon-park-outline:deeplink",
	});
}

export default Component;

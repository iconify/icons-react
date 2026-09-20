import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/w/wea1gcc5l.css';
import '../../css/z/zvamtptcp.css';
import '../../css/i/imsvvrv4g.css';
import '../../css/r/rj5rlhb9o.css';
import '../../css/z/zy_nyobrx.css';
import '../../css/l/l5wukrb6k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="wea1gcc5l"/><path class="zvamtptcp"/><path class="imsvvrv4g"/><path class="rj5rlhb9o"/><path class="zy_nyobrx"/><path class="l5wukrb6k"/></g>`,
		"fallback": "streamline-color:ai-navigation-spark",
	});
}

export default Component;

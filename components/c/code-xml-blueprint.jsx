import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/s/sqt8v5ywe.css';
import '../../css/e/ex8pu-bqw.css';
import '../../css/q/qqqhlf-rd.css';
import '../../css/b/bol0cdcoz.css';
import '../../css/o/olfec-bbv.css';
import '../../css/z/zavfahc0j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="sqt8v5ywe wm-deco"/><path class="ex8pu-bqw wm-deco"/><path class="qqqhlf-rd wm-k"/><path class="bol0cdcoz wm-a"/><path class="olfec-bbv wm-k"/><path class="wm-a zavfahc0j"/></g>`,
		"fallback": "withicons:code-xml-blueprint",
	});
}

export default Component;

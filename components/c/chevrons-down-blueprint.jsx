import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d-jd-neki.css';
import '../../css/k/k2ubz8ubn.css';
import '../../css/t/t2_on9b6f.css';
import '../../css/q/qk8onsnjh.css';
import '../../css/l/l3at31bhe.css';
import '../../css/j/j80k7lh5i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d-jd-neki wm-deco"/><path class="k2ubz8ubn wm-deco"/><path class="t2_on9b6f wm-k"/><path class="qk8onsnjh wm-a"/><path class="l3at31bhe wm-k"/><path class="j80k7lh5i wm-a"/></g>`,
		"fallback": "withicons:chevrons-down-blueprint",
	});
}

export default Component;

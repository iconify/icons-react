import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9nmekbvz.css';
import '../../css/d/d-jd-neki.css';
import '../../css/k/k2ubz8ubn.css';
import '../../css/g/gd39rbc8r.css';
import '../../css/d/d2r1bhs8v.css';
import '../../css/j/j80k7lh5i.css';
import '../../css/n/nwan8jbfn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9nmekbvz"><path class="d-jd-neki wm-deco"/><path class="k2ubz8ubn wm-deco"/><path class="gd39rbc8r wm-k"/><path class="d2r1bhs8v wm-a"/><path class="j80k7lh5i wm-k"/><path class="nwan8jbfn wm-a"/></g>`,
		"fallback": "withicons:chevrons-up-blueprint",
	});
}

export default Component;

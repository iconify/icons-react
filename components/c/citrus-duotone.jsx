import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/h/hzxqgcawr.css';
import '../../css/j/j_r5lpy0i.css';
import '../../css/c/c3dx5xbhi.css';
import '../../css/q/qa_5jacjg.css';
import '../../css/c/cy_2ifqzt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="hzxqgcawr"/><path class="j_r5lpy0i"/><path class="c3dx5xbhi"/><path class="qa_5jacjg"/><path class="cy_2ifqzt"/></g>`,
		"fallback": "lucide-extended:citrus-duotone",
	});
}

export default Component;

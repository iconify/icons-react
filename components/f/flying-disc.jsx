import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o3cs2pb3j.css';
import '../../css/s/siyl6_4rk.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/e/eg2oelb-s.css';
import '../../css/w/wu-qhsb3w.css';
import '../../css/w/wqis7mbhr.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse transform="rotate(-70 36 30.5)" class="o3cs2pb3j"/><path class="siyl6_4rk"/><g class="jn8qy4bru"><ellipse transform="rotate(-69.796 36 30.5)" class="eg2oelb-s"/><ellipse transform="rotate(-70 36 30.5)" class="wu-qhsb3w"/><path class="wqis7mbhr"/></g>`,
		"fallback": "openmoji:flying-disc",
	});
}

export default Component;

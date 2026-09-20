import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_raf5bng.css';
import '../../css/j/jyzrcrb7b.css';
import '../../css/q/qqexecxho.css';
import '../../css/t/t3fkntbgu.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/p/p0hl-pd-h.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="e_raf5bng"><ellipse class="jyzrcrb7b"/><ellipse class="qqexecxho"/><ellipse class="t3fkntbgu"/></g><g class="jn8qy4bru"><path class="p0hl-pd-h"/><ellipse class="jyzrcrb7b"/><ellipse class="qqexecxho"/><ellipse class="t3fkntbgu"/></g>`,
		"fallback": "openmoji:ant",
	});
}

export default Component;

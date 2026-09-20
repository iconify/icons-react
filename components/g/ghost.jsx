import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/c-tnjiruf.css';
import '../../css/g/gin4gdcnw.css';
import '../../css/g/gzbk6rbvb.css';
import '../../css/y/y53xrycce.css';
import '../../css/d/dm0q5bb9z.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/j/jqgwprb4g.css';
import '../../css/t/t-0l3dbue.css';
import '../../css/a/a2f722bty.css';
import '../../css/t/tf09pxb0l.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="c-tnjiruf"/><ellipse class="gin4gdcnw"/><ellipse class="gzbk6rbvb"/><path class="y53xrycce"/><ellipse class="dm0q5bb9z"/><g class="jn8qy4bru"><ellipse class="jqgwprb4g"/><path class="t-0l3dbue"/><ellipse class="a2f722bty"/><ellipse class="tf09pxb0l"/></g>`,
		"fallback": "openmoji:ghost",
	});
}

export default Component;

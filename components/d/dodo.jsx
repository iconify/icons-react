import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgjy9r09n.css';
import '../../css/i/i6jqbtb4r.css';
import '../../css/j/j-ih9d92t.css';
import '../../css/x/x7a3q1b3l.css';
import '../../css/s/shoeovb9g.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/i/iqsqkbbcc.css';
import '../../css/x/xtyenbcqc.css';
import '../../css/a/an2ftrb5p.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jgjy9r09n"/><path class="i6jqbtb4r"/><path class="j-ih9d92t"/><path class="x7a3q1b3l"/><path class="shoeovb9g"/><g class="jn8qy4bru"><path class="iqsqkbbcc"/><path class="xtyenbcqc"/><path class="an2ftrb5p"/></g>`,
		"fallback": "openmoji:dodo",
	});
}

export default Component;

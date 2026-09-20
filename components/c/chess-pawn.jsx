import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jxqi2jbpi.css';
import '../../css/p/pkls_-boj.css';
import '../../css/v/vy2ku-b-x.css';
import '../../css/l/l_-pkbkin.css';
import '../../css/j/js6ktdcsr.css';
import '../../css/a/avlhy8pks.css';
import '../../css/c/ckjodlpdb.css';
import '../../css/c/cz492rcct.css';
import '../../css/n/n8w-frhqt.css';
import '../../css/b/bfzqkob7q.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/v/v-pcj286g.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jxqi2jbpi"><path class="pkls_-boj"/><circle class="vy2ku-b-x"/><path class="l_-pkbkin"/></g><path class="js6ktdcsr"/><path class="avlhy8pks"/><path class="ckjodlpdb"/><circle class="cz492rcct"/><path class="n8w-frhqt"/><path class="bfzqkob7q"/><g class="jn8qy4bru"><circle class="vy2ku-b-x"/><path class="v-pcj286g"/></g>`,
		"fallback": "openmoji:chess-pawn",
	});
}

export default Component;

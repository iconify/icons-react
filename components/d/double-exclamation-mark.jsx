import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/udd3bbc2x.css';
import '../../css/a/a28p5hbxj.css';
import '../../css/l/ll_e4nczx.css';
import '../../css/k/kg34tac_t.css';
import '../../css/q/qap6u6spg.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/b/b947sbnju.css';
import '../../css/k/k6fgf6ajc.css';
import '../../css/t/t0zblg2yq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="udd3bbc2x"><ellipse class="a28p5hbxj"/><path class="ll_e4nczx"/><ellipse class="kg34tac_t"/><path class="qap6u6spg"/></g><g class="jn8qy4bru"><ellipse class="b947sbnju"/><ellipse class="k6fgf6ajc"/><path class="t0zblg2yq"/></g>`,
		"fallback": "openmoji:double-exclamation-mark",
	});
}

export default Component;

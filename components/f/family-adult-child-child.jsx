import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/brnax_b_s.css';
import '../../css/f/fymjow83k.css';
import '../../css/q/qb-kz2wvv.css';
import '../../css/c/c-zrgpb5l.css';
import '../../css/b/byyzmmbae.css';
import '../../css/w/wei-sebgq.css';
import '../../css/e/e9x6wnbon.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/kstdobcnw.css';
import '../../css/h/h0blh4bwv.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="brnax_b_s"><path class="fymjow83k"/><circle class="qb-kz2wvv"/><g class="c-zrgpb5l"><circle class="byyzmmbae"/><circle class="wei-sebgq"/><path class="e9x6wnbon"/></g></g><g class="jn8qy4bru"><circle class="kstdobcnw"/><circle class="byyzmmbae"/><circle class="wei-sebgq"/><path class="h0blh4bwv"/></g>`,
		"fallback": "openmoji:family-adult-child-child",
	});
}

export default Component;

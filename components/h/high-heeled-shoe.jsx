import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xt6-8gots.css';
import '../../css/x/xbsoibqea.css';
import '../../css/w/w0n-ygh8f.css';
import '../../css/u/ub_ew5wbc.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/k/khtp0tjmz.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVGiRAjLcDQ" class="xt6-8gots"/></defs><path class="xbsoibqea"/><path class="w0n-ygh8f"/><path class="ub_ew5wbc"/><g class="jn8qy4bru"><path class="khtp0tjmz"/><use href="#SVGiRAjLcDQ"/><use href="#SVGiRAjLcDQ"/></g>`,
		"fallback": "openmoji:high-heeled-shoe",
	});
}

export default Component;

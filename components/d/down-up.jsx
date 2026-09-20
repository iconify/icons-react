import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/c/cjqtb6rwi.css';
import '../../css/k/k5pymk42u.css';
import '../../css/j/jwawlch5e.css';
import '../../css/a/a4fp1owbq.css';
import '../../css/d/dz_ijegit.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="cjqtb6rwi"/><path class="k5pymk42u"/><path class="jwawlch5e"/><path class="a4fp1owbq"/><path class="dz_ijegit"/></g>`,
		"fallback": "pepicons-pencil:down-up",
	});
}

export default Component;

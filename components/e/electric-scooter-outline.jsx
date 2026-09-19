import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/u/uu-ccsewz.css';
import '../../css/h/h_wfhzbpa.css';
import '../../css/c/ck7jbacvf.css';
import '../../css/c/c-pklybfk.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="uu-ccsewz"/><path class="h_wfhzbpa"/><path class="ck7jbacvf"/><path class="c-pklybfk"/></g>`,
		"fallback": "glyphs:electric-scooter-outline",
	});
}

export default Component;

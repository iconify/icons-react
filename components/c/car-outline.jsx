import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o1-5lfgdv.css';
import '../../css/q/qa_ur-bdp.css';
import '../../css/d/duhq62b0j.css';
import '../../css/m/ms7x4mb5m.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="o1-5lfgdv"/><path class="qa_ur-bdp"/><path class="duhq62b0j"/><path class="ms7x4mb5m"/></g>`,
		"fallback": "glyphs:car-outline",
	});
}

export default Component;

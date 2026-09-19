import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcpug3b7d.css';
import '../../css/d/d87ud_bsv.css';
import '../../css/a/a_bbs6b7a.css';
import '../../css/b/boq1zg2ir.css';
import '../../css/r/rfmo84bve.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fcpug3b7d"/><path class="d87ud_bsv"/><path class="a_bbs6b7a"/><path class="boq1zg2ir"/><path class="rfmo84bve"/>`,
		"fallback": "fxemoji:barchart",
	});
}

export default Component;

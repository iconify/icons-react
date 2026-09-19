import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dux41cbwc.css';
import '../../css/j/jgb2w2b3k.css';
import '../../css/i/itdz_wb-w.css';

const viewBox = {"width":15,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dux41cbwc"/><path class="jgb2w2b3k"/><path class="itdz_wb-w"/>`,
		"fallback": "formkit:export",
	});
}

export default Component;

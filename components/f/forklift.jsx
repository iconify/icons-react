import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/z/zg2hoac6p.css';
import '../../css/u/up1c25bec.css';
import '../../css/t/t718pm8uq.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g transform="translate(0 2)" class="n1lsf0bnc"><circle class="zg2hoac6p"/><circle class="up1c25bec"/><path class="t718pm8uq"/></g>`,
		"fallback": "si-glyph:forklift",
	});
}

export default Component;

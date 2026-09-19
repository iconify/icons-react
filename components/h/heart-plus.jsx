import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/gjdjfffgs.css';
import '../../css/t/tb1aqpa-v.css';
import '../../css/b/brt3ujb3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="gjdjfffgs"/><path class="tb1aqpa-v"/><path class="brt3ujb3v"/></g>`,
		"fallback": "si-glyph:heart-plus",
	});
}

export default Component;

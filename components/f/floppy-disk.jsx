import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/g/g56tg2bmy.css';
import '../../css/d/dmp8t0bvq.css';

const viewBox = {"width":17,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="g56tg2bmy"/><path class="dmp8t0bvq"/></g>`,
		"fallback": "si-glyph:floppy-disk",
	});
}

export default Component;

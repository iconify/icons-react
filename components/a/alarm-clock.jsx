import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hemnfj98r.css';
import '../../css/o/ofs51p39o.css';
import '../../css/z/z83pfsbxg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="hemnfj98r"/><path class="ofs51p39o"/><path class="z83pfsbxg"/></g>`,
		"fallback": "si-glyph:alarm-clock",
	});
}

export default Component;

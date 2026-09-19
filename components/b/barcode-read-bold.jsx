import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pr52f_b5y.css';
import '../../css/s/s4cl7284p.css';
import '../../css/o/oln1prb6w.css';
import '../../css/u/ubdxevbux.css';
import '../../css/k/ko4f4urva.css';
import '../../css/n/ngb3iwz0p.css';
import '../../css/p/pe6sd5bcq.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="pr52f_b5y"><path class="s4cl7284p"/><rect class="oln1prb6w"/><rect class="ubdxevbux"/><rect class="ko4f4urva"/><rect class="ngb3iwz0p"/><rect class="pe6sd5bcq"/></g>`,
		"fallback": "glyphs:barcode-read-bold",
	});
}

export default Component;

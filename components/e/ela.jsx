import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/m/mmre9hb3h.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/j/jrsov7_ob.css';
import '../../css/e/e8y_yacht.css';
import '../../css/b/bcuyf3bpf.css';
import '../../css/u/u8jlf-iya.css';
import '../../css/f/fyv9c2frp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="mmre9hb3h"/><g class="l5y23ru5w"><path class="jrsov7_ob"/><path class="e8y_yacht"/><path class="bcuyf3bpf"/><path class="u8jlf-iya"/><path class="fyv9c2frp"/></g></g>`,
		"fallback": "cryptocurrency:ela",
	});
}

export default Component;

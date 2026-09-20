import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p98tnc2uy.css';
import '../../css/m/myyi8vngx.css';
import '../../css/o/ov3z5ybhm.css';
import '../../css/j/jn8qy4bru.css';
import '../../css/g/gf76gdbwh.css';
import '../../css/w/wkwymhb-o.css';
import '../../css/h/hhdhrc96d.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p98tnc2uy"/><path class="myyi8vngx"/><path class="ov3z5ybhm"/><g class="jn8qy4bru"><path class="gf76gdbwh"/><path class="wkwymhb-o"/><path class="hhdhrc96d"/></g>`,
		"fallback": "openmoji:headphone",
	});
}

export default Component;

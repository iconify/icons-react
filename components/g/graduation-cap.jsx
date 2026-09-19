import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bvkc79bpm.css';
import '../../css/x/x37kokw5r.css';
import '../../css/u/u8i5jabla.css';
import '../../css/t/tdi87sbpd.css';
import '../../css/s/segiswblx.css';
import '../../css/x/x14m0f3ei.css';
import '../../css/i/ior89nbtm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bvkc79bpm"><path class="x37kokw5r"/><ellipse class="u8i5jabla"/></g><path class="tdi87sbpd"/><g class="bvkc79bpm"><path class="segiswblx"/><circle class="x14m0f3ei"/><path class="ior89nbtm"/></g>`,
		"fallback": "flat-color-icons:graduation-cap",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/x/x3_k44z0a.css';
import '../../css/s/ssww1kb2i.css';
import '../../css/o/o2r20265f.css';
import '../../css/i/iy1a8hbwf.css';
import '../../css/u/uvss_uvsg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><circle class="x3_k44z0a"/><circle class="ssww1kb2i"/><circle class="o2r20265f"/><path class="iy1a8hbwf"/><path class="uvss_uvsg"/></g>`,
		"fallback": "hugeicons:chart-line-data-02",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mxa6bmemp.css';
import '../../css/s/s03b48b1u.css';
import '../../css/z/z1fbjac_z.css';
import '../../css/r/rpd_-w94c.css';
import '../../css/i/ij2x_72vy.css';
import '../../css/b/b45nybbyo.css';
import '../../css/m/ms97xcczk.css';
import '../../css/b/bcd3v_kfe.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mxa6bmemp"/><path class="s03b48b1u"/><path class="z1fbjac_z"/><path class="rpd_-w94c"/><g class="ij2x_72vy"><path class="b45nybbyo"/><path class="ms97xcczk"/><path class="bcd3v_kfe"/></g>`,
		"fallback": "openmoji:bar-chart",
	});
}

export default Component;

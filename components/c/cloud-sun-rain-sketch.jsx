import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tczw_hbsg.css';
import '../../css/j/jlszr274p.css';
import '../../css/b/b77471bvp.css';
import '../../css/i/ia35t3bos.css';
import '../../css/z/zzfolpdfq.css';
import '../../css/o/o0e_2rhnn.css';
import '../../css/x/xlf7d5bfc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="tczw_hbsg"><path class="jlszr274p"/><path class="b77471bvp wm-a"/><path class="ia35t3bos wm-s"/><path class="wm-k zzfolpdfq"/><path class="o0e_2rhnn wm-a"/><path class="wm-s xlf7d5bfc"/></g>`,
		"fallback": "withicons:cloud-sun-rain-sketch",
	});
}

export default Component;

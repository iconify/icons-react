import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/b/bos0j4biy.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/j/joxvtybff.css';
import '../../css/f/fcl75_otk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="bos0j4biy"/><circle class="rs-d_y_0o"/><path class="joxvtybff"/><path class="fcl75_otk"/></g>`,
		"fallback": "hugeicons:cottage",
	});
}

export default Component;

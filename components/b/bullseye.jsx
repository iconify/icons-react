import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/ewi525f_x.css';
import '../../css/k/k4vddkb9k.css';
import '../../css/l/lj49ud5bv.css';
import '../../css/o/ob_fvvblc.css';
import '../../css/o/oodpyysvf.css';
import '../../css/z/z7nqsnbny.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ewi525f_x"/><path class="k4vddkb9k"/><path class="lj49ud5bv"/><path class="ob_fvvblc"/><path class="oodpyysvf"/><path class="z7nqsnbny"/></g>`,
		"fallback": "fluent-emoji-flat:bullseye",
	});
}

export default Component;

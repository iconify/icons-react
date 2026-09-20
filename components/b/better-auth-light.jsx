import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/lmki3ubtm.css';
import '../../css/q/qtikdbcvk.css';
import '../../css/s/sfcunzbzv.css';
import '../../css/w/w8i_ob5hf.css';

const viewBox = {"width":500,"height":500};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="lmki3ubtm"/><path class="qtikdbcvk"/><path class="sfcunzbzv"/><path class="w8i_ob5hf"/></g>`,
		"fallback": "thesvg-color:better-auth-light",
	});
}

export default Component;

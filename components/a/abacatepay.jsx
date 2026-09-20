import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xn9d2sc7l.css';
import '../../css/q/qg239nbdb.css';
import '../../css/n/nb4ax_b1e.css';
import '../../css/a/aq6-kc63v.css';
import '../../css/u/u4gm9xb0y.css';

const viewBox = {"width":29,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="xn9d2sc7l"/><path class="qg239nbdb"/><path class="nb4ax_b1e"/><path class="aq6-kc63v"/><path class="u4gm9xb0y"/></g>`,
		"fallback": "thesvg-color:abacatepay",
	});
}

export default Component;

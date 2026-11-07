import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/a/aqhok2bbj.css';
import '../../css/w/wtr0t5bay.css';
import '../../css/x/xo0gn7bpl.css';
import '../../css/z/zkjcpqlzm.css';
import '../../css/s/sm0uzcbjt.css';
import '../../css/j/jed98nbpx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><circle class="aqhok2bbj"/><path class="wtr0t5bay"/><path class="xo0gn7bpl"/><path class="zkjcpqlzm"/><path class="sm0uzcbjt"/><path class="jed98nbpx"/></g>`,
		"fallback": "solar:help-broken",
	});
}

export default Component;

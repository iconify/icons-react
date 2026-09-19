import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e71vpenes.css';
import '../../css/p/pxwjowqap.css';
import '../../css/k/kf3vwpb8g.css';
import '../../css/s/s4uj_g5wj.css';
import '../../css/y/yhvmzbbvr.css';
import '../../css/n/n-6ow5klk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e71vpenes"/><path class="pxwjowqap"/><g class="kf3vwpb8g"><path class="s4uj_g5wj"/><path class="yhvmzbbvr"/></g><path class="n-6ow5klk"/>`,
		"fallback": "flat-color-icons:inspection",
	});
}

export default Component;

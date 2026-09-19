import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u53ewsbpz.css';
import '../../css/b/bb3hrhbnl.css';
import '../../css/t/ts_melbms.css';
import '../../css/x/xix4a2upr.css';
import '../../css/j/jftus9b_e.css';
import '../../css/p/p7t1d1z9w.css';
import '../../css/f/ft3003buj.css';
import '../../css/v/vruwbxgel.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u53ewsbpz"/><path class="bb3hrhbnl"/><path class="ts_melbms"/><path class="xix4a2upr"/><path class="jftus9b_e"/><path class="p7t1d1z9w"/><path class="ft3003buj"/><path class="vruwbxgel"/>`,
		"fallback": "fxemoji:clinkingbeermugs",
	});
}

export default Component;

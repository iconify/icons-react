import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pywiv_biz.css';
import '../../css/q/qv4_abryf.css';
import '../../css/c/c0wsg8bse.css';
import '../../css/y/yfoxxnbix.css';
import '../../css/r/rbeht2tnq.css';
import '../../css/i/ivikgibsc.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pywiv_biz"/><path class="qv4_abryf"/><path class="c0wsg8bse"/><path class="yfoxxnbix"/><path class="rbeht2tnq"/><path class="ivikgibsc"/>`,
		"fallback": "energy-icons:bifacial-panel-20-bold",
	});
}

export default Component;

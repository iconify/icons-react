import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bt7kujbfp.css';
import '../../css/i/is8a1duci.css';
import '../../css/v/vh1dgbcue.css';
import '../../css/m/m1y4hsbgq.css';
import '../../css/e/e39ud6bwf.css';
import '../../css/l/l3v-u6t6g.css';
import '../../css/z/zko2vubei.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bt7kujbfp"/><circle class="is8a1duci"/><circle class="vh1dgbcue"/><circle class="m1y4hsbgq"/><circle class="e39ud6bwf"/><circle class="l3v-u6t6g"/><path class="zko2vubei"/>`,
		"fallback": "carbon:ibm-power-vs",
	});
}

export default Component;

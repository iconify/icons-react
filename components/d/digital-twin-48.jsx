import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ugmed2boc.css';
import '../../css/r/rixlmmb0i.css';
import '../../css/e/e8-qncccz.css';
import '../../css/m/mnkzgebuu.css';
import '../../css/w/wdyim30xn.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ugmed2boc"/><path class="rixlmmb0i"/><path class="e8-qncccz"/><path class="mnkzgebuu"/><path class="wdyim30xn"/>`,
		"fallback": "energy-icons:digital-twin-48",
	});
}

export default Component;

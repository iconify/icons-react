import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jy_n96oom.css';
import '../../css/t/tq3jfobxa.css';
import '../../css/e/e58540bzj.css';
import '../../css/w/w3ursc5fy.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jy_n96oom"/><path class="tq3jfobxa"/><path class="e58540bzj"/><path class="w3ursc5fy"/>`,
		"fallback": "energy-icons:fertiliser-48",
	});
}

export default Component;

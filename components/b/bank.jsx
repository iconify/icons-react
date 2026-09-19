import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/st8db2bct.css';
import '../../css/w/wbqlirbrf.css';
import '../../css/t/txsafwbwa.css';
import '../../css/o/ovyl-pr9b.css';
import '../../css/g/gk5cqqbli.css';
import '../../css/j/j8z1oveli.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="st8db2bct"/><path class="wbqlirbrf"/><path class="txsafwbwa"/><path class="ovyl-pr9b"/><path class="gk5cqqbli"/><path class="j8z1oveli"/>`,
		"fallback": "fxemoji:bank",
	});
}

export default Component;

import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyvvt7bhx.css';
import '../../css/c/c952xtech.css';
import '../../css/f/fryt02bfr.css';
import '../../css/g/g0yl3ybfk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pyvvt7bhx"/><path class="c952xtech"/><path class="fryt02bfr"/><path class="g0yl3ybfk"/>`,
		"fallback": "energy-icons:cycle-lane-48",
	});
}

export default Component;

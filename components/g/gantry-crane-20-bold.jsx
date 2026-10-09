import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f0224gbwy.css';
import '../../css/s/s149jjboe.css';
import '../../css/j/jqow3gbkz.css';
import '../../css/l/lb3olt71m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f0224gbwy"/><path class="s149jjboe"/><path class="jqow3gbkz"/><path class="lb3olt71m"/>`,
		"fallback": "energy-icons:gantry-crane-20-bold",
	});
}

export default Component;

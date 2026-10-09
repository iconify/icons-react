import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbpwmytgh.css';
import '../../css/m/m6omgn3hc.css';
import '../../css/f/fbqsjxnbt.css';
import '../../css/q/qho2-b78i.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbpwmytgh"/><path class="m6omgn3hc"/><path class="fbqsjxnbt"/><path class="qho2-b78i"/>`,
		"fallback": "energy-icons:forest-20-bold",
	});
}

export default Component;

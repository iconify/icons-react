import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p1i2kqxtp.css';
import '../../css/j/js0evub2c.css';
import '../../css/r/r_qwwvyaa.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p1i2kqxtp"/><path class="js0evub2c"/><path class="r_qwwvyaa"/>`,
		"fallback": "energy-icons:hospital-48",
	});
}

export default Component;

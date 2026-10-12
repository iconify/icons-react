import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/for14rbhn.css';
import '../../css/y/yyebewpzb.css';
import '../../css/q/qpno0-uga.css';
import '../../css/l/lsfembcox.css';
import '../../css/x/xz-75e69l.css';
import '../../css/l/l3qindbue.css';
import '../../css/f/fdtytm4ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="for14rbhn"/><path class="yyebewpzb"/><path class="qpno0-uga"/><path class="lsfembcox"/><path class="xz-75e69l"/><path class="l3qindbue"/><path class="fdtytm4ox"/>`,
		"fallback": "energy-icons:heat-pump-air-x-20-bold",
	});
}

export default Component;

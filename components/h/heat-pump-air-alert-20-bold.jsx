import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wuok9n6gl.css';
import '../../css/y/yyebewpzb.css';
import '../../css/q/qpno0-uga.css';
import '../../css/l/lsfembcox.css';
import '../../css/x/xz-75e69l.css';
import '../../css/j/jeyqzjnhx.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wuok9n6gl"/><path class="yyebewpzb"/><path class="qpno0-uga"/><path class="lsfembcox"/><path class="xz-75e69l"/><path class="jeyqzjnhx"/>`,
		"fallback": "energy-icons:heat-pump-air-alert-20-bold",
	});
}

export default Component;

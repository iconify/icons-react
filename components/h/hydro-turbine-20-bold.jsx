import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qc3aivm8q.css';
import '../../css/j/jvlfvgboy.css';
import '../../css/w/woe8reb4u.css';
import '../../css/y/yntic7bpn.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qc3aivm8q"/><path class="jvlfvgboy"/><path class="woe8reb4u"/><path class="yntic7bpn"/>`,
		"fallback": "energy-icons:hydro-turbine-20-bold",
	});
}

export default Component;

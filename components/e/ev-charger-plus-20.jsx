import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mp8od4m5s.css';
import '../../css/f/fixef821q.css';
import '../../css/o/o24sug9tq.css';
import '../../css/v/vwu-497ty.css';
import '../../css/r/rmh-uhtym.css';
import '../../css/a/aqj0--bjv.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mp8od4m5s"/><path class="fixef821q"/><path class="o24sug9tq"/><path class="vwu-497ty"/><path class="rmh-uhtym"/><path class="aqj0--bjv"/>`,
		"fallback": "energy-icons:ev-charger-plus-20",
	});
}

export default Component;

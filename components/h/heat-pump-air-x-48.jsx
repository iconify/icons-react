import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y53-rwntq.css';
import '../../css/p/pyx51abpy.css';
import '../../css/w/wk2dzgbah.css';
import '../../css/l/l2oen6bkn.css';
import '../../css/i/iau15ibeg.css';
import '../../css/e/empdt5byq.css';
import '../../css/j/j3cy-fbyb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y53-rwntq"/><path class="pyx51abpy"/><path class="wk2dzgbah"/><path class="l2oen6bkn"/><path class="iau15ibeg"/><path class="empdt5byq"/><path class="j3cy-fbyb"/>`,
		"fallback": "energy-icons:heat-pump-air-x-48",
	});
}

export default Component;

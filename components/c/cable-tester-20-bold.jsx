import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xp_etqb_g.css';
import '../../css/i/igjclji7g.css';
import '../../css/r/rydg37bln.css';
import '../../css/o/or6bu4_ox.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xp_etqb_g"/><path class="igjclji7g"/><path class="rydg37bln"/><path class="or6bu4_ox"/>`,
		"fallback": "energy-icons:cable-tester-20-bold",
	});
}

export default Component;

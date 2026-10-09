import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rmgp-hp4m.css';
import '../../css/b/b0-65lw1h.css';
import '../../css/w/weuhzbcsv.css';
import '../../css/j/jbjwaubeg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rmgp-hp4m"/><path class="b0-65lw1h"/><path class="weuhzbcsv"/><path class="jbjwaubeg"/>`,
		"fallback": "energy-icons:house-key-20-bold",
	});
}

export default Component;

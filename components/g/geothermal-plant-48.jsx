import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg9bwxhqq.css';
import '../../css/u/ukmfrgzls.css';
import '../../css/b/bet_z3b5v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg9bwxhqq"/><path class="ukmfrgzls"/><path class="bet_z3b5v"/>`,
		"fallback": "energy-icons:geothermal-plant-48",
	});
}

export default Component;

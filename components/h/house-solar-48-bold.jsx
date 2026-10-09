import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w7ykncbhd.css';
import '../../css/c/c0d8b832j.css';
import '../../css/l/ln_qjmbiv.css';
import '../../css/m/m46n-bb2h.css';
import '../../css/o/ohpw7equm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w7ykncbhd"/><path class="c0d8b832j"/><path class="ln_qjmbiv"/><path class="m46n-bb2h"/><path class="ohpw7equm"/>`,
		"fallback": "energy-icons:house-solar-48-bold",
	});
}

export default Component;

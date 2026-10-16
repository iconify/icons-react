import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vc-70lbob.css';
import '../../css/b/b-pvjkb6t.css';
import '../../css/m/mdegrtxcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vc-70lbob"/><path class="b-pvjkb6t"/><path class="mdegrtxcz"/>`,
		"fallback": "energy-icons:hydro-plant-alert-48-bold",
	});
}

export default Component;

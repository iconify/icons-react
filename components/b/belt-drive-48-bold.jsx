import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k48mo0bik.css';
import '../../css/u/u1ifhyb-o.css';
import '../../css/t/t7x_kqnwi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k48mo0bik"/><path class="u1ifhyb-o"/><path class="t7x_kqnwi"/>`,
		"fallback": "energy-icons:belt-drive-48-bold",
	});
}

export default Component;

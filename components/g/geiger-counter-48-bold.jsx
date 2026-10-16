import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ex_ipjb0f.css';
import '../../css/r/rvkxzn91e.css';
import '../../css/o/oqjoxtvhd.css';
import '../../css/j/jo4gwvdxg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ex_ipjb0f"/><path class="rvkxzn91e"/><path class="oqjoxtvhd"/><path class="jo4gwvdxg"/>`,
		"fallback": "energy-icons:geiger-counter-48-bold",
	});
}

export default Component;

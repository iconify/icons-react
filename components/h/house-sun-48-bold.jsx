import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uxvnz_b5x.css';
import '../../css/s/s7yuobceb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uxvnz_b5x"/><path class="s7yuobceb"/>`,
		"fallback": "energy-icons:house-sun-48-bold",
	});
}

export default Component;

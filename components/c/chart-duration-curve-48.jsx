import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/utf77lbef.css';
import '../../css/y/ytxleqb4k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="utf77lbef"/><path class="ytxleqb4k"/>`,
		"fallback": "energy-icons:chart-duration-curve-48",
	});
}

export default Component;
